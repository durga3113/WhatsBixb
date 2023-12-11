/* Copyright (C) 2023 DX-MODS.
Licensed under the MIT License;
you may not use this file except in compliance with the License.
WhatsBixby - Ziyan
*/

const { Bixby, isPublic } = require("../lib/")
Bixby({
          pattern: 'revtxt ?(.*)',
          fromMe: isPublic,
          desc: 'reverse the given text',
          type: 'converter'}, 
          async (m, match) => {
match = match || m.reply_message.text
if (!match) return await m.reply("Give me a text to reverse")
await m.reply(match.split("").reverse().join(""))
});

Bixby({
          pattern: 'unrevtxt ?(.*)',
          fromMe: isPublic,
          desc: 'reverse the given text',
          type: 'converter'}, 
          async (m, match) => {
match = match || m.reply_message.text
if (!match) return await m.reply("Give me a text to reverse")
await m.reply(match.split("").reverse().join(""))
});
