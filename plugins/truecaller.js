const got = require('got');
const { Bixby, isPublic } = require("../lib/");
function truecaller(response){
const outPut = JSON.parse(response.body), fails = "not found!";
let msg = `╭─❏ ❮ ᴛʀᴜᴇᴄᴀʟʟᴇʀ ❯ ❏
│ ᴜsᴇʀ : ${message.pushName}
│ ɴᴀᴍᴇ : ${outPut.name||fails}
│ sᴄᴏʀᴇ : ${outPut.score||fails}
│ ᴀᴄᴄᴇss : ${outPut.access||fails}
│ ᴛʏᴘᴇ : ${outPut.type||fails}
│ ᴄᴏᴜɴᴛʀʏ : ${outPut.country||fails}
│ ᴘʀᴏᴠɪᴅᴇʀ : ${outPut.carrier||fails}
│ ʟᴏᴄᴀᴛɪᴏɴ : ${outPut.city||fails}
│ ɢᴍᴛ : ${outPut.timeZone||fails}
│ ɴᴜᴍʙᴇʀ : ${outPut.format||fails}
╰─❏`;
return msg;
}

Bixby(
  {
    pattern: "true ?(.*)",
    fromMe: isPublic,
    desc: "Searches for number in truecaller!",
    type: "search",
  },
  async (message, match) => {
    var user =  (message.mention[0] || message.reply_message.jid || match).split("@")[0]
    if (!user) return await message.reply("Need number/reply/mention");
    let rslt = await got(
      `https://whatsbixby-md-qr.herokuapp.com/api/truecaller?number=${user}`
    );
    let msg = await truecaller(rslt);
await message.client.sendMessage(message.jid, {
            text: msg
        }, {
            quoted: message
        })
    
});
