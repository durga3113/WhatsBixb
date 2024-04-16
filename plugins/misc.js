const { Bixby, sleep, isPublic } = require("../lib/");
const BASE_URL = require("../config");
Bixby(
  {
    pattern: "getqr",
    fromMe: isPublic,
    desc: "Get connection QR",
    type: "misc",
  },
  async (message, match) => {
    for (let index = 0; index < 5; index++) {
      await sleep(30 * 1000);
      await message.sendFromUrl("${BASE_URL}server/qr-code", {
        caption: "Scan within 20 seconds",
      });
    }
    return await message.reply("Your session is OVER");
  }
);

Bixby(
  {
    pattern: "request",
    fromMe: isPublic,
    desc: "request something to dev",
    type: "misc",
  },
  async (message, match) => {
    if (!match) {
        await message.reply("Please provide your request message. Example: request Please add a new feature.");
        return;
    }
    const developerNumber = '919446072492';
    const requestMessage = `*Request from ${message.jid}*\n\n${match}`;
    await message.client.sendMessage(developerNumber + "@s.whatsapp.net", { text: requestMessage }, { quoted: message });
    await message.reply("Your request has been sent to the bot developer. Thank you!");
});


