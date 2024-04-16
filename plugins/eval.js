const {
  Function,
  isPublic,
  getUrl,
  fromBuffer,
  getBuffer,
  getJson,
  AddMp3Meta,
  createMap,
  formatBytes,
  parseJid,
  isUrl,
  parsedJid,
  decodeJid,
  runtime,
  clockString,
  sleep,
  Bixby,
} = require("../lib/");
const util = require("util");
const config = require("../config");



Bixby({pattern:'eval', on: "text", fromMe: true,desc :'Runs a server code'}, async (message, match, m, client) => {
  if (match.startsWith(">")) {
    //const m = message;
    try {
      let evaled = await eval(`${match.replace(">", "")}`);
      if (typeof evaled !== "string") evaled = require("util").inspect(evaled);
      await message.reply(evaled);
    } catch (err) {
      await message.reply(util.format(err));
    }
  }
});
