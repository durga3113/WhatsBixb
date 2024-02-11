/* Copyright (C) 2024 DX-MODS.
Licensed under the MIT License;
you may not use this file except in compliance with the License.
WhatsBixby - Ziyan
*/

const { Bixby, XKCDComic, isPublic } = require("../lib/");

Bixby(
  {
    pattern: "xkcd",
    fromMe: isPublic,
    desc: "Send a random XKCD comic.",
    type: "misc",
  },
  async (message, match, m) => {
    try {
      const result = await XKCDComic();
      message.sendMessage(result.imageUrl, { quoted: message.data }, "image");
    } catch (error) {
      console.error("Error:", error.message);
      message.reply("Error fetching XKCD comic.");
    }
  }
);
