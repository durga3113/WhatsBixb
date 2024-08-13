/* Copyright (C) 2024 DX-MODS.
Licensed under the MIT License;
you may not use this file except in compliance with the License.
WhatsBixby - Ziyan
*/

const { Bixby, isPublic } = require("../lib/");
const { BASE_URL, API_KEY } = require("../config");
const axios = require('axios')

Bixby(
  {
    pattern: "npm",
    fromMe: isPublic,
    desc: "Searches Npm package",
    type: "search",
  },
async (message, match) => {
match = match || message.reply_message.text;
if (!match) return await message.reply("*_Enter npm username!_*");
axios.get(`${BASE_URL}api/npm?text=${match}&apikey=${API_KEY}`).then(({ data }) => {
let txt = data.result.results.map(({ package: pkg }) => `*${pkg.name}* (v${pkg.version})\n_${pkg.links.npm}_\n_${pkg.description}_`).join('\n\n')
message.reply(txt)
}).catch(e => console.log(e))
});
