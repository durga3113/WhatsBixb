/* Copyright (C) 2023 DX-MODS.
Licensed under the MIT License;
you may not use this file except in compliance with the License.
WhatsBixby - Ziyan
*/

const { sendTts } = require("../lib/tts");
const { Bixby, isPublic } = require("../lib");

Bixby(
  {
    pattern: "tts",
    fromMe: isPublic,
    desc: "text to speech",
    type: "converter",
  },  
		async (message, match) => {			
         await sendTts(message, match);
})
