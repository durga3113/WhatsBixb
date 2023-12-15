/* Copyright (C) 2023 DX-MODS.
Licensed under the MIT License;
you may not use this file except in compliance with the License.
WhatsBixby - Ziyan
*/

const { Bixby, isPublic } = require("../lib");
Bixby({
        pattern: "wame",
	fromMe: isPublic,
	desc: "wame generator",
	type: "misc",
},async (message, match) => {
	let sender = 'https://wa.me/' + (message.reply_message.sender || message.mention[0] || message.text).split('@')[0];
	await message.reply(sender);
});
