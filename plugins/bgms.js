const { Bixby, isPrivate } = require("../lib/")
Bixby({
	pattern: 'bgm ?(.*)',
	fromMe: isPrivate,
	desc: 'send bgm',
	type: 'misc',
}, async (message, match) => {
var duration = [200001355,3999600,359996400] // Fake duration. Make it false for actual duration
let fake = duration[Math.floor(Math.random()*duration.length)] || false

const buttonMessage = {
    audio: { url: 'https://i.imgur.com/X2Jjafn.mp4'},
    seconds: fake, 
    mimetype: 'audio/mp4',
    ptt: true,
}

message.client.sendMessage(message.jid, buttonMessage, { quoted: message })

})
