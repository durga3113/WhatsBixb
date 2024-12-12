const express = require("express");
const cluster = require("cluster");
const os = require("os");
const path = require("path");
const fs = require("fs");

const numCPUs = os.cpus().length;
const TOTAL_PROCESSES = Number(process.env.TOTAL_PROCESSES) || numCPUs;
const workers = new Map();
const workerLogs = new Map();
const restartAttemptsMap = new Map();

const MAX_RESTART_ATTEMPTS = 3;
const port = process.env.PORT || 8000;

// Function to start a worker process
function startWorker(file) {
    if (workers.has(file)) return;

    const worker = cluster.fork({ workerFile: file });
    workerLogs.set(file, []);

    worker.on("message", (data) => handleWorkerMessage(file, worker, data));
    worker.on("error", (error) => {
        console.error(`Error in worker ${file}:`, error);
    });

    worker.on("exit", (code, signal) => {
        handleWorkerExit(file, code, signal); // Restart mechanism
    });

    workers.set(file, worker);
}

// Handle messages from worker processes
function handleWorkerMessage(file, worker, data) {
    console.log(`[Worker ${file}]:`, data);

    const logs = workerLogs.get(file);
    if (logs) {
        logs.push({ timestamp: new Date().toISOString(), data });
    }

    switch (data) {
        case "reset":
            resetProcess(file);
            break;
        case "uptime":
            worker.send(process.uptime());
            break;
        case "shutdown":
            shutdown();
            break;
        default:
            if (typeof data === "object" && data.type === "getUsage") {
                console.log(`Worker ${file} - CPU: ${data.cpu}% | Memory: ${data.memory}MB`);
            }
            break;
    }
}

// Handle worker process exit and implement restart logic
function handleWorkerExit(file, code, signal) {
    let attempts = restartAttemptsMap.get(file) || 0;

    if (attempts < MAX_RESTART_ATTEMPTS) {
        console.log(`Worker ${file} exited (Code: ${code}, Signal: ${signal}). Restarting... (Attempt ${attempts + 1})`);
        
        restartAttemptsMap.set(file, attempts + 1); // Increment restart attempts
        setTimeout(() => startWorker(file), 5000); // Wait 5 seconds before restarting the worker
    } else {
        console.error(`Max restart attempts reached for worker ${file}`);
    }
}

// Reset a specific worker process
function resetProcess(file) {
    const worker = workers.get(file);
    if (worker) {
        worker.kill();
    } else {
        console.error(`No worker process running for ${file}`);
    }
}

// Shutdown all workers
function shutdown() {
    for (const [file, worker] of workers.entries()) {
        if (worker) {
            worker.send("shutdown");
            workers.delete(file);
            console.log(`Stopped process for ${file}`);
        }
    }
}

// Helper function to delete session files
async function deleteSession() {
    try {
        const sessionPath = "session/";
        if (fs.existsSync(sessionPath)) {
            const files = await fs.promises.readdir(sessionPath);
            await Promise.all(
                files.map(async (file) => {
                    if (file !== "Aurora.txt") {
                        await fs.promises.unlink(path.join(sessionPath, file));
                        console.log(`${file} has been deleted.`);
                    }
                })
            );
        } else {
            console.log("Session directory does not exist.");
        }
    } catch (err) {
        console.error("Error deleting session files:", err);
    }
}

// Helper function to format uptime
function formatUptime(seconds) {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = Math.floor(seconds % 60);
    return `${hours} hour${hours !== 1 ? "s" : ""}, ${minutes} minute${minutes !== 1 ? "s" : ""}, ${secs} second${secs !== 1 ? "s" : ""}`;
}

const app = express();

// Master process logic
if (cluster.isMaster) {
    console.log(`Starting ${TOTAL_PROCESSES} worker process(es)...`);

    for (let i = 0; i < TOTAL_PROCESSES; i++) {
        startWorker("index.js");
    }

    // Bind the master process to the port
    app.listen(port, () => console.log(`Server listening on http://localhost:${port}`));
}

// Health check endpoint
app.get("/health", (req, res) => {
    const statuses = Array.from(workers.entries()).map(([file, worker]) => ({
        file,
        pid: worker.process.pid,
        status: worker.isConnected() ? "Connected" : "Disconnected",
    }));
    res.json({
        status: "OK",
        uptime: formatUptime(process.uptime()),
        memoryUsage: process.memoryUsage(),
        workers: statuses,
    });
});

// Restart workers
app.post("/restart", (req, res) => {
    console.log("[Restarting]");
    for (const worker of workers.values()) {
        worker.send("reset"); // Or worker.kill() and restart
    }
    res.sendStatus(200);
});

// Delete session files
app.post("/update", (req, res) => {
    console.log("[Discarding Session]");
    deleteSession();
    res.sendStatus(200);
});

// Shut down the server
app.post("/shutdown", async (req, res) => {
    console.log("[Shutting Down]");
    for (const worker of workers.values()) {
        worker.send("shutdown");
    }
    setTimeout(() => process.exit(0), 5000);
    res.sendStatus(200);
});

// Boot up a worker
app.post("/bootup", (req, res) => {
    console.log("[BootUp]");
    startWorker("index.js");
    res.sendStatus(200);
});
