/* Copyright (C) 2024 DX-MODS.
Licensed under the MIT License;
you may not use this file except in compliance with the License.
WhatsBixby - Ziyan
*/

const cluster = require('cluster');
const path = require('path');
const fs = require('fs');
const http = require('http'); // For making HTTP requests to self-ping
const os = require('os');
const process = require('process');
const express = require("express");

const workers = {};

// Function to start a worker process
function start(file) {
    if (workers[file]) return;
    const args = [path.join(__dirname, file), ...process.argv.slice(2)];

    cluster.setupMaster({
        exec: path.join(__dirname, file),
        args: args.slice(1),
    });

    const p = cluster.fork();
    p.on('message', async (data) => {
        console.log(`[RECEIVED from ${file}]`, data);
        switch (data) {
            case 'reset':
                resetProcess(file);
                break;
            case 'uptime':
                p.send(process.uptime());
                break;
            case 'shutdown':
                shutdown();
                break;
            case 'Kill':
                console.log("Received Kill command, shutting down everything immediately");
                shutdown(true);
                break;
        }
    });

    p.on('exit', (code, signal) => {
        console.error(`Child process for ${file} exited with code: ${code}, signal: ${signal}`);
        if (!workers[file]) {
            console.error(`No process reference found for ${file}`);
            return;
        }

        delete workers[file];

        if (signal !== 'SIGTERM') { // Prevent restarting if killed intentionally
            console.log("Restarting the process immediately");
            start(file);
        }
    });

    workers[file] = p;
}

// Function to reset a worker process
function resetProcess(file) {
    const worker = workers[file];
    if (worker) {
        worker.kill();
    } else {
        console.error(`No child process running for ${file}`);
    }
}

// Function to boot up the server
function BootUp() {
    console.log("Booting Up Sequence Initiated!");
    start("index.js");
}

// Function to shut down the server
function shutdown(killAll = false) {
    console.log("Shutting down the server...");
    for (const file in workers) {
        stopProcess(file, killAll);
    }
    if (killAll) {
        console.log("Exiting the main process...");
        process.exit();
    }
}

// Function to stop a worker process
function stopProcess(file, killAll = false) {
    const worker = workers[file];
    if (worker) {
        if (killAll) {
            worker.kill();
        } else {
            worker.send('shutdown'); // Send shutdown message to the worker
        }
        delete workers[file];
        console.log(`Stopping process for ${file}`);
    } else {
        console.error(`No child process running for ${file}`);
    }
}

// Function to delete a session
async function deleteSession() {
    fs.readdir('lib/auth_info_baileys/', (err, files) => {
        if (err) {
            console.error('Error reading directory:', err);
            return;
        }

        files.forEach(file => {
            if (file !== 'Aurora.txt') {
                fs.unlink(path.join('lib/auth_info_baileys/', file), err => {
                    if (err) {
                        console.error('Error deleting file:', err);
                        return;
                    }
                    console.log(`${file} has been deleted.`);
                });
            }
        });
    });
}

// Function for graceful shutdown
function gracefulShutdown() {
    console.log("Initiating graceful shutdown...");
    shutdown(true);
    process.exit();
}

// Enhance logging
function log(message) {
    const timestamp = new Date().toISOString();
    console.log(`[${timestamp}] ${message}`);
}

// Self-ping function
function startSelfPing(interval = 60000) { // Default to 1 minute intervals
    setInterval(() => {
        http.get(`http://localhost:${port}/self-ping`, (res) => {
            log(`Self-ping status: ${res.statusCode}`);
        }).on('error', (err) => {
            console.error('Self-ping error:', err);
        });
    }, interval);
}

// Configuration management using environment variables
const port = process.env.PORT || 8000;

console.log(`==================================================\n                Server Starting...!\n==================================================`);

const app = express();

app.post('/restart', (req, res) => {
    log("[Restarting]");
    for (const file in workers) {
        resetProcess(file);
    }
    res.sendStatus(200);
});

app.post('/update', (req, res) => {
    log("[Discarding Session]");
    deleteSession();
    res.sendStatus(200);
});

app.post('/shutdown', (req, res) => {
    log("[ShutDown]");
    shutdown();
    res.sendStatus(200);
});

app.post('/bootup', (req, res) => {
    log("[BootUp]");
    BootUp();
    res.sendStatus(200);
});

app.post('/feksession', (req, res) => {
    log("[Discarding Session]");
    res.sendStatus(200);
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'lib/base/index.html'));
});

// Self-ping route
app.get('/self-ping', (req, res) => {
    res.send('pong');
});

// Health check route
app.get('/health', (req, res) => {
    res.json({
        status: 'ok',
        uptime: process.uptime(),
        memoryUsage: process.memoryUsage(),
        cpuUsage: process.cpuUsage(),
        loadAverage: os.loadavg(),
        workers: Object.keys(workers).length,
    });
});

app.listen(port, () => {
    log(`cortana Server listening on port http://localhost:${port}`);
    startSelfPing(); // Start self-pinging when the server starts
});

process.on('SIGTERM', gracefulShutdown);
process.on('SIGINT', gracefulShutdown);

start("index.js");
