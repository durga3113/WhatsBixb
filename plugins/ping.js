/* Copyright (C) 2023 DX-MODS.
Licensed under the MIT License;
you may not use this file except in compliance with the License.
WhatsBixby - Ziyan
*/

const { Bixby ,isPrivate} = require("../lib/");

Bixby(
  {
    pattern: "ping",
    fromMe: isPrivate,
    desc: "To check ping",
    type: "user",
  },
  async (message, match) => {
    const start = new Date().getTime();
    await message.sendMessage(" *Testing Speed!* ");
    const end = new Date().getTime();
    return await message.sendMessage(
      " *Response in !* " + (end - start) + " ms"
    );
  }
);
