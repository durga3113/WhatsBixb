/* Copyright (C) 2023 DX-MODS.
Licensed under the MIT License;
you may not use this file except in compliance with the License.
WhatsBixby - Ziyan
*/

const { Bixby, isPublic, sendMenu } = require("../lib/");
Bixby({
 pattern: "menu",
 fromMe: isPublic,
 desc: "show your menu items",
 type: "info",
 },
 async (message, match) => {			
 return await sendMenu(message);
})
