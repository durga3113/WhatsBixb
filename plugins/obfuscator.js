/*Copyright (C) 2024 DX-MODS.
Licensed under the MIT License;
you may not use this file except in compliance with the License.
WhatsBixby - Ziyan
*/

const { Bixby, isPublic } = require("../lib/");
const { obfuscateCode } = require("bixby-md");

Bixby(
    {
        pattern: "obf",
        fromMe: isPublic,
        desc: "obfuscate code",
        type: "tools",
    },
    async (m, match) => {
        match = match || m.reply_message.text;
        if (!match) return await m.reply("Give me some code to obfuscate");
        const obfuscatedCode = obfuscateCode(match);
        await m.reply(obfuscatedCode);
    }
);
