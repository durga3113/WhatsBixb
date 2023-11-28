const { Bixby, sleep, isPrivate, isUrl, Bitly } = require("../lib/");
Bixby(
  {
    pattern: "getqr ?(.*)",
    fromMe: isPrivate,
    desc: "Get connection QR",
    type: "misc",
  },
  async (message, match) => {
    for (let index = 0; index < 5; index++) {
      await sleep(30 * 1000);
      await message.sendFromUrl("https://whatsbixby-md-qr.herokuapp.com/server/qr-code", {
        caption: "Scan within 20 seconds",
      });
    }
    return await message.reply("Your session is OVER");
  }
);
