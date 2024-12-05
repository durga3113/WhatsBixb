module.exports = {
  apps: [
    {
      name: 'WhatsBixby',
      script: 'index.js',
      instances: 1,
      exec_mode: 'fork',
      watch: false,
      autorestart: true,
      max_memory_restart: '1G',
      log_date_format: 'YYYY-MM-DD HH:mm:ss',
    },
  ],
};
