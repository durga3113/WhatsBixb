const pm2 = require("pm2");

// Start an Application
function startApp(scriptPath, appName) {
    pm2.connect((err) => {
        if (err) {
            console.error("PM2 connect error:", err);
            return process.exit(2);
        }

        pm2.start(
            {
                script: scriptPath, // Path to the script
                name: appName,      // Optional app name
            },
            (err) => {
                if (err) {
                    console.error("Error starting app:", err);
                } else {
                    console.log(`Started app: ${appName}`);
                }
                pm2.disconnect(); // Disconnect from PM2 daemon
            }
        );
    });
}

// Restart an Application
function restartApp(appName) {
    pm2.connect((err) => {
        if (err) {
            console.error("PM2 connect error:", err);
            return process.exit(2);
        }

        pm2.restart(appName, (err) => {
            if (err) {
                console.error("Error restarting app:", err);
            } else {
                console.log(`Restarted app: ${appName}`);
            }
            pm2.disconnect();
        });
    });
}

// Shutdown All Applications
function shutdown() {
    pm2.connect((err) => {
        if (err) {
            console.error("PM2 connect error:", err);
            return process.exit(2);
        }

        pm2.stop("all", (err) => {
            if (err) {
                console.error("Error stopping all apps:", err);
            } else {
                console.log("Stopped all apps");
            }

            pm2.killDaemon((err) => {
                if (err) {
                    console.error("Error killing PM2 daemon:", err);
                } else {
                    console.log("PM2 daemon killed");
                }
                pm2.disconnect();
            });
        });
    });
}

module.exports = {
  startApp,
  restartApp,
  shutdown
};
