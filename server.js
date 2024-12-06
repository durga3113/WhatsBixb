const cluster = require('cluster');
const os = require('os');
const path = require('path');
const fs = require('fs');
const express = require("express");

const CLUSTER = process.env.CLUSTER === 'true';
const workers = {};

function start(file) {
    if (workers[file]) return;

    const args = [path.join(__dirname, file), ...process.argv.slice(2)];
    cluster.setupMaster({
        exec: path.join(__dirname, file),
        args: args.slice(1),
    });

    const p = cluster.fork();
    p.on('message', (data) => handleWorkerMessage(file, p, data));
    p.on('exit', (code, signal) => handleWorkerExit(file, code, signal));
    workers[file] = p;
}

function handleWorkerMessage(file, worker, data) {
    console.log(`[RECEIVED from ${file}]`, data);
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
    console.log("Shutting down the server...");
    for (const file in workers) {
        stopProcess(file);
    }
}

function stopProcess(file) {
    const worker = workers[file];
    if (worker) {
        worker.send('shutdown');
        delete workers[file];
        console.log(`Stopped process for ${file}`);
    }
}

async function deleteSession() {
    fs.readdir('session/', (err, files) => {
        if (err) {
            console.error('Error reading directory:', err);
            return;
        }

        files.forEach(file => {
            if (file !== 'Aurora.txt') {
                fs.unlink(path.join('session/', file), err => {
                    if (err) console.error('Error deleting file:', err);
                    else console.log(`${file} has been deleted.`);
                });
            }
        });
    });
}

function healthCheck(req, res) {
    res.json({
        status: 'OK',
        uptime: process.uptime(),
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

function monitorMemoryUsage() {
    setInterval(() => {
        for (const file in workers) {
            const worker = workers[file];
            worker.send('getUsage');
        }
    }, 10000); // Check every 10 seconds
}

// Handle graceful shutdown
process.on('SIGINT', () => {
    console.log('SIGINT received. Shutting down gracefully...');
    shutdown();
    setTimeout(() => process.exit(0), 5000);
});

process.on('SIGTERM', () => {
    console.log('SIGTERM received. Shutting down gracefully...');
    shutdown();
    setTimeout(() => process.exit(0), 5000);
});

// Start server
const app = express();
const port = process.env.PORT || 8000;

app.post('/restart', (req, res) => {
    console.log("[Restarting]");
    for (const file in workers) resetProcess(file);
    res.sendStatus(200);
});

app.post('/update', (req, res) => {
    console.log("[Discarding Session]");
    deleteSession();
    res.sendStatus(200);
});

app.post('/shutdown', (req, res) => {
    console.log("[ShutDown]");
    shutdown();
    res.sendStatus(200);
});

app.post('/bootup', (req, res) => {
    console.log("[BootUp]");
    if (CLUSTER) start("index.js");
    else require('./index.js');
    res.sendStatus(200);
});

app.get('/status', (req, res) => {
    const workersStatus = Object.entries(workers).map(([file, worker]) => ({
        file,
        pid: worker.process.pid,
        status: worker.isConnected() ? 'Connected' : 'Disconnected',
    }));

    res.json({
        status: 'OK',
        uptime: process.uptime(),
        memoryUsage: process.memoryUsage(),
        totalWorkers: Object.keys(workers).length,
        workers: workersStatus,
    });
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'lib/base/index.html'));
});

app.listen(port, () => console.log(`Server listening on http://localhost:${port}`));

if (CLUSTER && cluster.isMaster) {
    const numCPUs = os.cpus().length;
    console.log(`Starting in cluster mode with ${numCPUs} workers...`);
    for (let i = 0; i < numCPUs; i++) cluster.fork();
    cluster.on('exit', (worker) => {
        console.error(`Worker ${worker.process.pid} exited. Restarting...`);
        cluster.fork();
    });
} else {
    console.log("Starting in single-process mode...");
    require('./index.js');
}
