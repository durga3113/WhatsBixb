/* Copyright (C) 2024 DX-MODS.
Licensed under the MIT License;
you may not use this file except in compliance with the License.
WhatsBixby - Ziyan
*/

const { Bixby, isPublic } = require("../lib/");
const { eBinary, dBinary } = require("../lib/functions/binary");

Bixby({
          pattern: "ebinary ?(.*)",
          fromMe: isPublic,
          desc: "encrypt text to binary",
          type: "converter"}, 
          async (m, match) => {
match = match || m.reply_message.text
if (!match) return await m.reply("Give me a text to encrypt")
m.reply(await eBinary(match));
});

Bixby({
          pattern: "dbinary ?(.*)",
          fromMe: isPublic,
          desc: "decrypt binary to text",
          type: "converter"}, 
          async (m, match) => {
match = match || m.reply_message.text
if (!match) return await m.reply("Give me a binary code")
m.reply(await dBinary(match));
});

Bixby({
          pattern: "ebase64 ?(.*)",
          fromMe: isPublic,
          desc: "decrypt binary to text",
          type: "converter"}, 
          async (m, match) => {
match = match || m.reply_message.text
if (!match) return await m.reply("Give me text to encode in base64")
var encodedString = btoa(match);
m.reply(encodedString);
});

Bixby({
          pattern: "ebase64 ?(.*)",
          fromMe: isPublic,
          desc: "decrypt binary to text",
          type: "converter"}, 
          async (m, match) => {
match = match || m.reply_message.text
if (!match) return await m.reply("Give me base64 to decrypt")
var decodedString = atob(match);
m.reply(decodedString);
});

