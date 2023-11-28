const { Bixby, getBuffer } = require('../lib/')
const image = 'https://i.imgur.com/xGPUXbk.jpeg' //MAIN IMAGE URL HERE
const number = "919446072492";
const ownerName = "WhatsBixby MD"

Bixby(
	{
		pattern: 'vv ?(.*)',
		fromMe: true,
		desc: 'forward viweOnce message',
		type: 'misc',
	},   async (message) => {
        if(!message.quoted || !message.quoted.viewOnceMessageV2) return await message.send("reply to an vv msg");
        const thumb = await getBuffer(image)
        opt = {}
        opt.linkPreview = {
               renderLargerThumbnail: false,
               showAdAttribution: true,
               title: "ɪͥᴛͭsᷤ ᴍͫᴇͤ ⏤͟͞ꪶ 𝑉𝑖𝑧 𝑍𝑒𝑟 ꫂ⛧͢",
               body: "ᴄʟɪᴄᴋ ʜᴇʀᴇ ᴛᴏ ᴳᵉᵗ🫂 !",
               mediaType: 1,
               thumbnail: thumb,
               sourceUrl: "http://wa.me/919446072492?text=Hey Ziyan_"
             }
     return await message.client.sendMessage(message.from,message.quoted, {viewOnce :false})
    }
);
