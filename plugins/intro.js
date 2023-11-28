const { Bixby, isPrivate, FancyRandom } = require("../lib/");

Bixby({
	pattern: 'intro ?(.*)',
	fromMe: isPrivate,
	desc: 'Sends intro',
	type: 'misc',
}, async (message, match) => {


let menu = `0ཻུ۪۪ꦽꦼ̷⸙‹•══════════════♡᭄
│       *「 𝗠𝗬 𝗜𝗡𝗧𝗥𝗢 」*
│ *Name      :* Ziyan
│ *Place       :* 𝙺𝚎𝚛𝚊𝚕𝚊
│ *Gender   :*  𝙼𝚊𝚕𝚎
│ *Age          :* 18
│ *Phone     :* wa.me/919446072492
│ *IG ID        :* --ziyxn_
│ *Status     :* Active
╰═════ꪶ ཻུ۪۪ꦽꦼ̷⸙ ━ ━ ━ ━ ꪶ ཻུ۪۪ꦽꦼ̷⸙`},`;

const buttons = [
  {buttonId: 'id1', buttonText: {displayText: '𝙰𝚗𝚝𝚑𝚊𝚍𝚊 𝚗𝚘𝚔𝚔𝚞𝚗𝚗𝚎🤍🤭'}, type: 1},
]

const buttonMessage = {
    video: {url: 'https://i.imgur.com/bhGo2Ai.jpeg'},
    caption: FancyRandom(menu),
    footer: 'whatsbixby-md',
    buttons: buttons,
    headerType: 1
}

await message.client.sendMessage(message.jid, buttonMessage)    
    });
