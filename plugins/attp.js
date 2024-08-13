/* Copyright (C) 2024 DX-MODS.
Licensed under the MIT License;
you may not use this file except in compliance with the License.
WhatsBixby - Ziyan
*/

const { Bixby, isPublic, getBuffer } = require("../lib");
const {PACKNAME, AUTHOR, BASE_URL, API_KEY } = require("../config");
const axios = require("axios");

Bixby(
  {
    pattern: "attp",
    fromMe: isPublic,
    desc: "text to rgb sticker",
    type: "sticker",
  },
  async (message, match) => {
    
      match = match || (message.reply_message && message.reply_message.text);
      if (!match) {
        return await message.reply("please enter any text");
      } 
        const apiurl = `${BASE_URL}api/attp?text=${encodeURIComponent(match)}&apikey=${API_KEY}`;
        const response = await axios.get(apiurl, { responseType: 'arraybuffer' });

        if (response.status === 200) {
          const stickerBuffer = Buffer.from(response.data, 'binary');
          await message.sendMessage(
            stickerBuffer,
            {
              packname: PACKNAME,
              author: AUTHOR,
            },
            'sticker'
          );
        }          
  }
);
      
Bixby(
  {
    pattern: "ttp",
    fromMe: isPublic,
    desc: "text to picture",
    type: "converter",
  },
  async (message, match) => {
match = match || message.reply_message.text;
if (!match) return await message.reply("please enter any text");
var url = `${BASE_URL}api/ttp?text=${match}&apikey=${API_KEY}`
var image = await getBuffer(url);
const buttonMessage = {
    image: image,
}
message.client.sendMessage(message.jid, buttonMessage, { quoted: message })
})
