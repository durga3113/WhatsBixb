const fs = require("fs").promises;
const fsx = require("fs");
const path = require("path");
const express = require("express");
const config = require("./config");
const connect = require("./lib/connection");
const { getandRequirePlugins } = require("./lib/db/plugins");
const { UpdateLocal, WriteSession } = require("./lib");
const { startApp, restartApp, shutdown } = require("./lib/pm2");
global.__basedir = __dirname;

// Function to delete sessions except for Aurora.txt
async function deleteSession() {
    fsx.readdir("session/", (err, files) => {
        if (err) {
            console.error("Error reading directory:", err);
            return;
        }

        files.forEach((file) => {
            if (file !== "Aurora.txt") {
                fsx.unlink(path.join("session/", file), (err) => {
                    if (err) {
                        console.error("Error deleting file:", err);
                        return;
                    }
                    console.log(`${file} has been deleted.`);
                });
            }
        });
    });
}

// Auth function to ensure credentials and initialize server
async function auth() {
    try {
        if (!fsx.existsSync("./lib/session/creds.json")) {
            await WriteSession();
        }
        return initialize();
    } catch (error) {
        console.error("AuthFile Generation Error:", error);
        return process.exit(1);
    }
}

// Function to read and require all `.js` files in a directory
const readAndRequireFiles = async (directory) => {
    try {
        const files = await fs.readdir(directory);
        return Promise.all(
            files
                .filter((file) => path.extname(file).toLowerCase() === ".js")
                .map((file) => require(path.join(directory, file)))
        );
    } catch (error) {
        console.error("Error reading and requiring files:", error);
        throw error;
    }
};

// Initialize function to sync database and install plugins
async function initialize() {
    console.log("============> Aurora-MD [Alien-Alfa] <============");
    try {
        await readAndRequireFiles(path.join(__dirname, "/lib/db/"));
        console.log("Syncing Database");
        await config.DATABASE.sync();
        console.log("⬇  Installing Plugins...");
        await readAndRequireFiles(path.join(__dirname, "/plugins/"));
        await getandRequirePlugins();
        console.log("✅ Plugins Installed!");
        return await connect();
    } catch (error) {
        console.error("Initialization error:", error);
        return process.exit(1); // Exit with error status
    }
}

// Start the auth and initialization process
auth();

// Initialize Express app
const app = express();
const port = process.env.PORT || 8000;

// Express routes
app.post("/restart", (req, res) => {
    console.log("[Restarting App]");
    restartApp("WhatsBixby"); // Replace "app-name" with the PM2 app name
    res.sendStatus(200);
});

app.post("/update", (req, res) => {
    console.log("[Discarding Session]");
    deleteSession();
    return res.sendStatus(200);
});

app.post("/shutdown", (req, res) => {
    console.log("[Shutting Down PM2]");
    shutdown();
    res.sendStatus(200);
});

app.post("/bootup", (req, res) => {
    console.log("[BootUp]");
    startApp("index.js", "WhatsBixby"); // Replace with your app's script and name
    res.sendStatus(200);
});

app.post("/feksession", (req, res) => {
    console.log("[Discarding Session]");
    return res.sendStatus(200);
});

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "lib/base/index.html"));
});

// Start the server
app.listen(port, () =>
    console.log(
        `==================================================\n                Server Starting...!\n==================================================\nBixby Server listening on http://localhost:${port}`
    )
);
