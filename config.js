/* Copyright (C) 2024 DX-MODS.
Licensed under the MIT License;
you may not use this file except in compliance with the License.
WhatsBixby - Ziyan
*/

const { Sequelize } = require("sequelize");
const fs = require("fs");
require("dotenv").config();

const toBool = (x) => x === "true";

const DATABASE_URL = process.env.DATABASE_URL || "./lib/db/database.db";

module.exports = {
  PORT: process.env.PORT || 8000,
  BASE_URL : "https://bixby-api.dxmods.xyz/",
  API_KEY : "8coTqIYPs6", //login here and get api key https://bixby-api.dxmods.xyz/users/login
  SESSION_ID:process.env.SESSION_ID || "",
  SESSION_VALIDATOR : "https://whatsbixby-qr.dxmods.xyz/",
  VERSION: require('./package.json').version,
  LOGS: toBool(process.env.LOGS) || true,
  CALL_BLOCK: toBool(process.env.CALL_BLOCK),
  ALWAYS_ONLINE: toBool(process.env.ALWAYS_ONLINE),
  LANGUAGE: process.env.LANGUAGE || "english",
  IMGBB_KEY: ["76a050f031972d9f27e329d767dd988f","deb80cd12ababea1c9b9a8ad6ce3fab2","78c84c62b32a88e86daf87dd509a657a"],
  ANTILINK: toBool(process.env.ANTI_LINK) || false,
  LOGS: toBool(process.env.LOGS) || true,
  ANTILINK_ACTION: process.env.ANTI_LINK || "kick",
  AUTH_TOKEN: "",
  HANDLERS: process.env.HANDLERS === 'false' || process.env.HANDLER === "null" ? '^': '^',
  RMBG_KEY: process.env.RMBG_KEY || false,
  BRANCH:process.env.WARN_COUNT || "master",
  WARN_COUNT:process.env.WARN_COUNT || 3,
  WELCOME_MSG: process.env.WELCOME_MSG || "Hi @user Welcome to @gname",
  GOODBYE_MSG: process.env.GOODBYE_MSG || "@user Left The Group",
  PACKNAME: process.env.PACKNAME || "𝙒𝞖𝞓𝙏𝙎",
  AUTHOR: process.env.AUTHOR || "𝞑𝞘𝞦𝞑𝙔",
  SUDO: process.env.SUDO || "919446072492",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  OWNER_NAME: process.env.OWNER_NAME || "𝙕𝞘𝙔𝞓𝞜",
  HEROKU: toBool(process.env.HEROKU) || false,
  BOT_NAME: process.env.BOT_NAME || "𝙒𝞖𝞓𝙏𝙎 𝞑𝞘𝞦𝞑𝙔",
  WORK_TYPE: process.env.WORK_TYPE || "public",
  DELETED_LOG_CHAT: "120363084228202932@g.us",
  DELETED_LOG: toBool(process.env.DELETED_LOG) || false,
  DATABASE_URL: DATABASE_URL,
  DATABASE:
    DATABASE_URL === "./lib/db/database.db"
      ? new Sequelize({
          dialect: "sqlite",
          storage: DATABASE_URL,
          logging: false,
        })
      : new Sequelize(DATABASE_URL, {
          dialect: "postgres",
          ssl: true,
          protocol: "postgres",
          dialectOptions: {
            native: true,
            ssl: { require: true, rejectUnauthorized: false },
          },
          logging: false,
        }),
};
