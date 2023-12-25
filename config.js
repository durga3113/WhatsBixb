/* Copyright (C) 2023 DX-MODS.
Licensed under the MIT License;
you may not use this file except in compliance with the License.
WhatsBixby - Ziyan
*/

const { Sequelize } = require("sequelize");
const fs = require("fs");
if (fs.existsSync("config.env"))
  require("dotenv").config({ path: "./config.env" });

const toBool = (x) => x == "true";

DATABASE_URL = process.env.DATABASE_URL || "./lib/database.db";
let HANDLER = "false";
module.exports = {
  BASE_URL : "https://whatsbixby-api-5a8fb2c9192b.herokuapp.com/",
  API_KEY : "8coTqIYPs6", //login here and get api key https://whatsbixby-api-5a8fb2c9192b.herokuapp.com/users/login
  ANTILINK: toBool(process.env.ANTI_LINK) || false,
  LOGS: toBool(process.env.LOGS) || true,
  ANTILINK_ACTION: process.env.ANTI_LINK || "kick",
  SESSION_ID:process.env.SESSION_ID || "",
  LANGUAGE: process.env.LANGUAGE || "english",
  HANDLERS: process.env.PREFIX || '[.]',
  BOT_INFO : "",
  RMBG_KEY: process.env.RMBG_KEY || false,
  IMGBB_KEY: process.env.IMGBB_KEY || "",
  BRANCH: "master",
  PACKNAME: process.env.PACKNAME || "WhatsBixby",
  WELCOME_MSG:
    process.env.WELCOME_MSG ||
    "Hi @user Welcome to @gname",
  GOODBYE_MSG: process.env.GOODBYE_MSG || "Hi @user It was Nice Seeing you",
  AUTHOR: process.env.AUTHOR || "Ziyan",
  DATABASE_URL: DATABASE_URL,
  DATABASE:
    DATABASE_URL === "./lib/database.db"
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
  SUDO: process.env.SUDO || "919446072492",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || " ",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || " ",
  OWNER_NAME: process.env.OWNER_NAME || "ᴢɪʏᴀɴ",
  BOT_NAME: process.env.BOT_NAME || "whatsbixby",
  WORK_TYPE: process.env.WORK_TYPE || "public",
  BOT_INFO: process.env.BOT_INFO || 'ᴡʜᴀᴛꜱ ʙɪxʙʏ;ᴛʜɪꜱ ʙᴏᴛ ᴅᴇᴠᴇʟᴏᴘᴇᴅ ʙʏ ᴢɪʏᴀɴ;©ʙɪxʙʏ ɪɴᴄ;https://graph.org/file/92119369714c2d0f509b9.jpg',
  
};
