const path = require('path');
const fs = require('fs');

async function deleteSession() {
    fs.readdir('session/', (err, files) => {
        if (err) {
            console.error('Error reading directory:', err);
            return;
        }

        files.forEach(file => {
            if (file !== 'Aurora.txt') {
                fs.unlink(path.join('session/', file), err => {
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

console.log(`==================================================\n                Server Starting...!\n==================================================`);
const express = require("express");
const app = express();
const port = process.env.PORT || 8000;

app.post('/restart', (req, res) => {
    console.log("[Restarting]");
    // Add restart logic here if needed
    res.sendStatus(200); 
});

app.post('/update', (req, res) => {
    console.log("[Discarding Session]");
    deleteSession();
    return res.sendStatus(200); 
});

app.post('/shutdown', (req, res) => {
    console.log("[ShutDown]");
    console.log("Shutting down the server...");
    process.exit(0); // Stop the process
});

app.post('/bootup', (req, res) => {
    console.log("[BootUp]");
    return res.sendStatus(200); 
});

app.post('/feksession', (req, res) => {
    console.log("[Discarding Session]");
    return res.sendStatus(200); 
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'lib/base/index.html'));
});

app.listen(port, () => console.log(`Bixby Server listening on port http://localhost:${port}`));
