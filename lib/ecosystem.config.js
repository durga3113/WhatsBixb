module.exports = {
  apps: [
    {
      name: 'WhatsBixby',
      script: '../index.js',         // Correct relative path to 'index.js'
      instances: 1,                  // Single instance (fork mode)
      exec_mode: 'fork',             // Use 'fork' mode
      watch: false,                  // Disable file watching
      autorestart: true,             // Automatically restart if the app crashes
      max_memory_restart: '1G',      // Restart if memory usage exceeds 1GB
      combine_logs: true,            // Combine logs into one output stream
      log_date_format: 'YYYY-MM-DD HH:mm:ss', // Add timestamps to logs
      out_file: '/dev/stdout',       // Send standard output logs to console
      error_file: '/dev/stderr',     // Send error logs to console
      env: {
        NODE_ENV: 'production',
      },
    },
  ],
};
