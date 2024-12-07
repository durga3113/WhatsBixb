const express = require("express");
const cluster = require('cluster');
const os = require('os');
const path = require('path');
const fs = require('fs');

const numCPUs = os.cpus().length;
const TOTAL_PROCESSES = parseInt(process.env.TOTAL_PROCESSES || numCPUs.toString(), 10);

const workers = new Map();
const workerLogs = new Map();

function startWorker(file) {
    if (workers.has(file)) return;

    const worker = cluster.fork({ workerFile: file });

    worker.on('message', (data) => handleWorkerMessage(file, worker, data));
    worker.on('exit', (code, signal) => {
        console.error(`Worker ${worker.process.pid} exited with code ${code} (${signal}). Restarting...`);
        workers.delete(file);
        workerLogs.delete(file);
        startWorker(file);
    });

    workers.set(file, worker);
    workerLogs.set(file, []);
}

function handleWorkerMessage(file, worker, data) {
    console.log(`[Worker ${file}]:`, data);

    const logs = workerLogs.get(file);
    if (logs) {
        logs.push({ timestamp: new Date().toISOString(), data });
    }

    switch (data) {
        case 'reset':
            resetProcess(file);
            break;
        case 'uptime':
            worker.send(process.uptime());
            break;
        case 'shutdown':
            shutdown();
            break;
        default:
            if (typeof data === 'object' && data.type === 'getUsage') {
                console.log(`Worker ${file} - CPU: ${data.cpu}% | Memory: ${data.memory}MB`);
            }
            break;
    }
}

function handleWorkerExit(file, code, signal) {
    console.error(`Worker for ${file} exited with code: ${code}, signal: ${signal}`);
    delete workers[file];
    if (CLUSTER) {
        console.log("Restarting the process...");
        start(file);
    }
}

function resetProcess(file) {
    const worker = workers[file];
    if (worker) {
        worker.kill();
    } else {
        console.error(`No child process running for ${file}`);
    }
}

function shutdown() {
    for (const file in workers) {
        const worker = workers[file];
        if (worker) {
            worker.send('shutdown');
            delete workers[file];
            console.log(`Stopped process for ${file}`);
        }
    }
}

function healthCheck(req, res) {
    res.json({
        status: 'OK',
        uptime: formatUptime(process.uptime()),
        memoryUsage: process.memoryUsage(),
        workers: Object.keys(workers).length,
    });
}


function workerStatus(req, res) {
    const statuses = Object.entries(workers).map(([file, worker]) => ({
        file,
        pid: worker.process.pid,
        status: worker.isConnected() ? 'Connected' : 'Disconnected',
    }));
    res.json({ workers: statuses });
}

function deleteSession() { // Async not needed here
    fs.readdir('session/', (err, files) => {
        if (err) {
            console.error('Error reading directory:', err);
            return;
        }

        for (const file of files) {  // Use for...of for cleaner iteration
            if (file !== 'Aurora.txt') {
                fs.unlink(path.join('session/', file), (err) => {
                    if (err) console.error('Error deleting file:', err);
                    else console.log(`${file} has been deleted.`);
                });
            }
        }
    });
}

function formatUptime(seconds) {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = Math.floor(seconds % 60);
    return `${hours} hour${hours !== 1 ? 's' : ''}, ${minutes} minute${minutes !== 1 ? 's' : ''}, ${secs} second${secs !== 1 ? 's' : ''}`;
}


if (cluster.isMaster) {
    console.log(`Starting ${TOTAL_PROCESSES} worker process(es)...`);

    for (let i = 0; i < TOTAL_PROCESSES; i++) {
        startWorker("index.js");
    }

} 

const app = express();
const port = process.env.PORT || 8000;




app.post('/restart', (req, res) => {
    console.log("[Restarting]");
    for (const worker of workers.values()) {
      worker.send('reset'); // Or worker.kill() and restart
    }
    res.sendStatus(200);
});


app.post('/update', (req, res) => {
    console.log("[Discarding Session]");
    deleteSession();
    res.sendStatus(200);
});

app.post('/shutdown', (req, res) => {
  console.log("[Shutting Down]");

  for (const worker of workers.values()) {
    worker.send('shutdown'); // Signal workers to shut down gracefully
  }

  // Give workers time to shut down before exiting the master process
  setTimeout(() => {
    process.exit(0); 
  }, 5000); // Adjust timeout as needed

  res.sendStatus(200);
});

app.post('/bootup', (req, res) => {
    console.log("[BootUp]");
    start("index.js");
    res.sendStatus(200);
});

app.get('/health', (req, res) => {
    res.json({
        status: 'OK',
        uptime: formatUptime(process.uptime()),
        memoryUsage: process.memoryUsage(),
        workers: workers.size,
    });
});

app.get('/status', workerStatus);

app.listen(port, () => console.log(`Server listening on http://localhost:${port}`));
