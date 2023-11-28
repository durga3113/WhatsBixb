const { Bixby, getBuffer } = require('../lib/')
const image = 'https://i.imgur.com/xGPUXbk.jpeg' //MAIN IMAGE URL HERE
const number = "919446072492";
const ownerName = "WhatsBixby MD"

Bixby(
	{
		pattern: 'owner ?(.*)',
		fromMe: false,
		desc: 'send owner vcard',
		type: 'misc',
	},   async (message) => {
        const thumb = await getBuffer(image)
        const vcard = 'BEGIN:VCARD\n' // metadata of the contact card
        + 'VERSION:3.0\n' + 'FN:'+ownerName+'\n' // full name
        + 'ORG:'+ownerName+';\n' // the organization of the contact
        + 'TEL;type=CELL;type=VOICE;waid='+number+':'+number+'\n' // WhatsApp ID + phone number
        + 'END:VCARD'
        opt = {}
        opt.linkPreview = {
               renderLargerThumbnail: false,
               showAdAttribution: true,
               title: "ɪͥᴛͭsᷤ ᴍͫᴇͤ ⏤͟͞ꪶ 𝑉𝑖𝑧 𝑍𝑒𝑟 ꫂ⛧͢",
               body: "ᴄʟɪᴄᴋ ʜᴇʀᴇ ᴛᴏ ᴳᵉᵗ🫂 !",
               mediaType: 1,
               thumbnail: thumb,
               sourceUrl: "http://wa.me/919446072492?text=_HEY Ziyan+🪄_"
             }
        let content = { contacts :{
            displayName: ownerName,
            contacts: [{
                vcard
            }],
           }
}
     return await message.SendMessage(message.from,content, opt)
    }
);
