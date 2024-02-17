/* Copyright (C) 2024 DX-MODS.
Licensed under the MIT License;
you may not use this file except in compliance with the License.
WhatsBixby - Ziyan
*/

const { Bixby, sleep, isPublic } = require("../lib/");
Bixby(
  {
    pattern: "getqr ?(.*)",
    fromMe: isPublic,
    desc: "Get connection QR",
    type: "misc",
  },
  async (message, match) => {
    for (let index = 0; index < 5; index++) {
      await sleep(30 * 1000);
      await message.sendFromUrl("${BASE_URL}qr-code/", {
        caption: "Scan within 20 seconds",
      });
    }
    return await message.reply("Your session is OVER");
  }
);
