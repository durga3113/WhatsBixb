const { Bixby, isPublic } = require("../lib/");
const tiny = require("../lib/functions");
const { BASE_URL, API_KEY } = require("../config");
const { obfuscateCode } = require("bixby-md");
const axios = require("axios");

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
Bixby(
  {
    pattern: "rvtxt",
    fromMe: isPublic,
    desc: "reverse the given text",
    type: "tools",
  }, 
  async (m, match) => {
match = match || m.reply_message.text
if (!match) return await m.reply("Give me a text to reverse")
await m.reply(match.split("").reverse().join(""))
});

Bixby(
  {
    pattern: "unrevtxt",
    fromMe: isPublic,
    desc: "reverse the given text",
    type: "tools",
  }, 
  async (m, match) => {
match = match || m.reply_message.text
if (!match) return await m.reply("Give me a text to reverse")
await m.reply(match.split("").reverse().join(""))
});

Bixby(
  {
    pattern: "ccgen",
    fromMe: isPublic,
    desc: "generate cc from bin",
    type: "tools",
  },
  async (message, match) => {
match = match || message.reply_message.text;
 if (!match) return await message.reply("*_Give me any bin*");

const response = await axios.get(`${BASE_URL}api/ccgen?text=${match}&apikey=${API_KEY}`);    

    if (response.data) {
      const ccdata = response.data.result.map(card => {
        return `CardNumber: ${card.CVV}\nExpirationDate: ${card.ExpirationDate}\nCVV: ${card.CardNumber}\n\n`;
      }).join('');

      return message.reply(tiny(`*CC GENERATED*\n\n${ccdata}`));
    } else {
      message.reply('api key limit is over');
    }

});
