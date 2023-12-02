const {SUDO} = require('../config');
const { getAudioBufferFromLink, addInfo, Bixby, bixbybuffer } = require('../lib');
const {MessageType, Mimetype } = require('@whiskeysockets/baileys');
const {readFileSync} = require('fs')
let ffmpeg = require('fluent-ffmpeg');
ffmpeg.setFfmpegPath(require('@ffmpeg-installer/ffmpeg').path);
var duration = [200001355,3999600,359996400] // 

var audios = `https://i.imgur.com/2nEwQLy.mp4,https://i.imgur.com/lDZOEHl.mp4,https://i.imgur.com/WxQbgOU.mp4,https://i.imgur.com/BVypaUc.mp4,https://i.imgur.com/L9Jnpt5.mp4,https://i.imgur.com/3Te73pm.mp4,https://i.imgur.com/gkzBe1X.mp4,https://i.imgur.com/aEpNAtl.mp4,https://i.imgur.com/JiuFyXy.mp4,https://i.imgur.com/jEVzyWS.mp4,https://i.imgur.com/1npmJY6.mp4`;
var tit = "Ziyan";
var art = "Hey";
var logo = "https://i.imgur.com/0IaPsiM.jpeg";
const image = "https://i.imgur.com/0IaPsiM.jpeg";
const image_1 = "https://i.imgur.com/0IaPsiM.jpeg";

Bixby({pattern: 'mention ?(.*)', fromMe: true,dontAddCommandList: true}, (async (message, match) => {return;}));
Bixby({on: 'text' ,fromMe: false}, (async (message, match) => {
const image1 = await bixbybuffer(image)
			const image2 = await bixbybuffer(image_1)
			const audio = await bixbybuffer(audios)
			      let fake = duration[Math.floor(Math.random()*duration.length)] || false
var jids = audios.split(',').filter(link => link.includes('mp4'));
try {var men = message.mention[0].split('@')[0]} catch {return;}
if (message.mention && message.mention[0] && SUDO.includes(men)) {
getAudioBufferFromLink(jids[Math.floor(Math.random()*jids.length)],async function(audio) {
if (audio) {
try { var res = await addInfo('mention_msg.mp3',tit,art,'Bixby metadata',await bixbybuffer(logo)) } catch(e) { return await message.sendMessage('Error on parsing audio \n'+e); }
return message.client.sendMessage(message.jid, { audio: res, second: fake, mimetype: 'audio/mp4',
			ptt: true,
			waveform: [00,99,00,99,00,99,00],
			contextInfo: {
			externalAdReply: {
					title: "ᴡʜᴀᴛꜱ ʙɪxʙʏ ᴍᴅ",
					body: "sᴏᴜɴᴅ : ▮▮▮▮▮▮▯▯▯",
					mediaType: 2,
					thumbnail: image2,
					mediaUrl: 'https://www.instagram.com/__ziyxn_',
					sourceUrl: 'https://www.instagram.com/__ziyxn_',
					
					}
				}
			}, { quoted: message })}
})}
}));
