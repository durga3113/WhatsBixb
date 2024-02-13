/*Copyright (C) 2024 DX-MODS.
Licensed under the MIT License;
you may not use this file except in compliance with the License.
WhatsBixby - Ziyan
*/

const { Bixby, isPublic, tiny } = require("../lib/");
const { BASE_URL, API_KEY } = require("../config");
const axios = require("axios");

Bixby(
  {
    pattern: "ccgen",
    fromMe: isPublic,
    desc: "generate cc from bin",
    type: "tools",
  },
  async (message, match) => {
match = match || message.reply_message.text;
 if (!match) return await message.reply("*_Give me any bin*");

const response = await axios.get(`${BASE_URL}api/ccgen?text=${match}&apikey=${API_KEY}`);    

    if (response.data) {
      const ccdata = response.data.result.map(card => {
        return `CardNumber: ${card.CVV}\nExpirationDate: ${card.ExpirationDate}\nCVV: ${card.CardNumber}\n\n`;
      }).join('');

      return message.reply(tiny(`*CC GENERATED*\n\n${ccdata}`));
    } else {
      message.reply('api key limit is over');
    }

});
