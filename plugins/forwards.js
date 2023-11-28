/* Copyright (C) 2023 DX-MODS.
Licensed under the MIT License;
you may not use this file except in compliance with the License.
WhatsBixby - Ziyan
*/
const { Bixby, parsedJid } = require("../lib/");

Bixby(
  {
    pattern: "forward ?(.*)",
    fromMe: true,
    desc: "description",
    type: "type",
  },
  async (message, match, m) => {
    if(!m.quoted) return message.reply('Reply to something') 
    let jids = parsedJid(match);
    for (let i of jids) {
     let msg =  await message.client.relayMessage(i, m.quoted.message, {
        messageId: m.quoted.key.id,
      });
      console.log(msg)
    }   
  }
);
