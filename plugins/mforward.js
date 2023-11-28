const {
	Bixby,
	getBuffer
} = require("../lib/");

const url1 = 'https://i.imgur.com/8ywakAD.jpeg'
const OWNER = 'Inrl';
const BoT = 'INRL-BOT-MD';
const duration = 2000001355
const ptt = true
const audiowave = [0,99,0,99,0,99,0,99,0,99,0,99,0];
const seconds = [999999999999999]
const number = "913002503001";
const source_url = "https://wa.me/"+number+"?text=_*៚ʜᴇʟʟᴏ "+OWNER+" sᴇʀ+ʙɪɢ ғᴀɴ+ᴠʀᴏ+🪄*_";
const media_url = "https://instagram.com/" ;
const title = "testing";
const body = "hey bro";

Bixby(
	   {
		pattern: 'fd',
		desc: 'forward msgs',
                sucReact: "🙃",
                category: ["system", "all"],
                type : "search"
	   },
	async (message, client, match) => {
try {
	if(!m.quoted) return message.reply('Reply to something') 
	if (!match) return await message.reply('need jid!!')
	if (!match.match('@')) return await message.reply('*Give me a jid*\nExample .fd jid1!')
	const contact = { key: {participant: `0@s.whatsapp.net`, ...(message.key.remoteJid ? { remoteJid: `status@broadcast` } : {}) }, message: { 'contactMessage': { 'displayName':BoT, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${BoT},;;;\nFN:${BoT}\nitem1.TEL;waid=${OWNER}:${OWNER}\nitem1.X-ABLabel:Mobile\nEND:VCARD`, 'jpegThumbnail':await getBuffer(url1), thumbnail:await getBuffer(url1),sendEphemeral: true}}}
	const image1 = await getBuffer(url1)
	let jid = match.trim();
	let media = await message.quoted.download();
        if(!jid.includes(',')){
	return await client.sendMessage(jid, { audio : media, mimetype: 'audio/mpeg', ptt: ptt, seconds: seconds, quoted: contact, waveform: audiowave, contextInfo: { externalAdReply:{
        title : title,
        body : body,
        showAdAttribution: true,
        mediaType:2,
        thumbnail: image1,
        mediaUrl: media_url, 
        sourceUrl: source_url }}}, {quoted: contact })
        } else {
        jid = jid.replaceAll(' ','').split(',')
        for(i=0;i<jid.length;i++){
        await client.sendMessage(jid[i], { audio : media, mimetype: 'audio/mpeg', ptt: ptt, seconds: seconds, quoted: contact, waveform: audiowave, contextInfo: { externalAdReply:{
        title : title,
        body : body,
        showAdAttribution: true,
        mediaType:2,
        thumbnail: image1,
        mediaUrl: media_url, 
        sourceUrl: source_url }}}, {quoted: contact })
                       }
               }
  } catch (e){
message.reply(e);
}
        }
);
