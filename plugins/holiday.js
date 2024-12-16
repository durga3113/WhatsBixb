const { Bixby, isPrivate } = require("../lib");

Bixby({
       pattern: "holiday",
       fromMe: isPrivate,
       desc: "get holiday",
       type: "misc",
}, 
async (m, match) => {
match = match || m.reply_message.text
if (!match) return await m.reply("Give me a text to encrypt")
m.reply(result);
});
