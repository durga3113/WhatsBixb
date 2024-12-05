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
const sessionPath = path.join(__dirname, "session/");
const credsPath = path.join(__dirname, "lib/session/creds.json");

process.on("unhandledRejection", (reason, promise) => {
    console.error("Unhandled Rejection at:", promise, "reason:", reason);
});

// Function to delete sessions except for Aurora.txt
async function deleteSession() {
    try {
        const files = await fs.readdir(sessionPath);
        await Promise.all(
            files
                .filter((file) => file !== "Aurora.txt")
                .map((file) =>
                    fs.unlink(path.join(sessionPath, file)).then(() =>
                        console.log(`${file} has been deleted.`)
                    )
                )
        );
    } catch (err) {
        console.error("Error deleting session files:", err);
    }
}

// Auth function to ensure credentials and initialize server
async function auth() {
    try {
        if (!fsx.existsSync(credsPath)) {
            await WriteSession();
        }
        return initialize();
    } catch (error) {
        console.error("AuthFile Generation Error:", error);
        process.exit(1);
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
        process.exit(1);
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
    restartApp("WhatsBixby");
    res.sendStatus(200);
});

app.post("/update", async (req, res) => {
    console.log("[Discarding Session]");
    await deleteSession();
    res.sendStatus(200);
});

app.post("/shutdown", (req, res) => {
    console.log("[Shutting Down PM2]");
    shutdown();
    res.sendStatus(200);
});

app.post("/bootup", (req, res) => {
    console.log("[BootUp]");
    startApp("index.js", "WhatsBixby");
    res.sendStatus(200);
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
