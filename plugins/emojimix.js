/* Copyright (C) 2024 DX-MODS.
Licensed under the MIT License;
you may not use this file except in compliance with the License.
WhatsBixby - Ziyan
*/

const { Bixby, isPublic, getBuffer } = require("../lib");
const { BASE_URL, API_KEY, CAPTION } = require("../config");

Bixby({
  pattern: "emojimix",
  fromMe: isPublic,
  desc: "make two emojis to one image",
  type: "textpro",
},
async(message, match) => {
match = match || message.reply_message.text;
if (!match) return await message.reply("*enter any two emoji split with comma*");
var emoji1, emoji2; 
if (match.includes(',')) {
var split = match.split(',');
emoji1 = split[0];
emoji2 = split[1];
}
var api_url = `${BASE_URL}api/emojimix?text=${emoji1}&text1=${emoji2}&apikey=${API_KEY}`
var image = await getBuffer(api_url);
const buttonMessage = {
image: image,
caption: CAPTION,
}
message.client.sendMessage(message.jid, buttonMessage, { quoted: message })
});
