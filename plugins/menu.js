/* Copyright (C) 2024 DX-MODS.
Licensed under the MIT License;
you may not use this file except in compliance with the License.
WhatsBixby - Ziyan
*/

const { Bixby, isPublic } = require("../lib/");
const { sendMenu } = require("../lib/functions");

Bixby({
 pattern: "menu",
 fromMe: isPublic,
 desc: "show your menu items",
 type: "information",
 },
 async (message, match) => {			
 return await sendMenu(message);
})
