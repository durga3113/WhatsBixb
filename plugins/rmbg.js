/* Copyright (C) 2024 DX-MODS.
Licensed under the MIT License;
you may not use this file except in compliance with the License.
WhatsBixby - Ziyan
*/

const { Bixby, isPublic } = require("../lib");
const { rmbg } = require("../lib/functions");
const config = require("../config");

Bixby(
  {
    pattern: "rmbg",
    fromMe: isPublic,
    desc: "Remove background of an image",
    type: "image",
  },
  async (message, match, m) => {
    if (!config.REMOVEBG)
      return await message.sendMessage(
        message.jid,
        "Set RemoveBg API Key in config.js \n Get it from https://www.remove.bg/api"
      );
    if (!message.reply_message && !message.reply_message.image)
        
      return await message.reply("Reply to an image");
    let buff = await m.quoted.download();
    let buffer = await rmbg(buff);
    if (!buffer) return await message.reply("An error occured");
    await message.sendMessage(
      message.jid,
      buffer,
      {
        quoted: message.reply_message.key,
        mimetype: "image/png",
        fileName: "removebg.png",
      },
      "document"
    );
  }
);
