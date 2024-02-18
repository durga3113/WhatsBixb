/* Copyright (C) 2024 DX-MODS.
Licensed under the MIT License;
you may not use this file except in compliance with the License.
WhatsBixby - Ziyan
*/

const { Bixby, isPublic } = require("../lib/");
const { getAitts, sendTts } = require("../lib/tts");

Bixby(
        {
         
        pattern: "aitts",
        fromMe: isPublic,
        desc: "converte text to ai voice",
        type: "ai",
},
		async (message, match) => {			
        await getAitts(message, match);
})

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
