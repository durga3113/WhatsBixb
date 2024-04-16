/*Copyright (C) 2024 DX-MODS.
Licensed under the MIT License;
you may not use this file except in compliance with the License.
WhatsBixby - Ziyan
*/

const { Bixby, isPublic, getBuffer } = require("../lib/");
const { BASE_URL, API_KEY, CAPTION } = require("../config");
const axios = require("axios");

Bixby(
  {
    pattern: "carbon",
    fromMe: isPublic,
    desc: "create a carbon for text",
    type: "misc",
  },
  async (message, match) => {
  if (!match) return await message.reply('Please give any text');
  const response = await axios.get(`${BASE_URL}api/carbon?text=${match}&apikey=${API_KEY}`);	    
  var img = await getBuffer(response.data.result);
  const imgMessage = {
  image: img,
  caption: CAPTION,
  }
  message.client.sendMessage(message.jid, imgMessage) 
  });
