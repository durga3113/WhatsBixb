const { Bixby, isPrivate, getBuffer } = require("../lib");
const { plugins } = require("../lib/events");
const { tiny } = require("../lib/functions");
const { OWNER_NAME, BOT_NAME, WORK_TYPE, BOT_IMG } = require("../config");

Bixby({
    pattern: "menu",
    fromMe: isPrivate,
    desc: "Show your menu items",
    type: "information"
}, async (message) => {
    try {
        // Define star symbols
        const stars = ['☼︎','★','✦','✬','⁂','✢','✣','✥','✲','⌤','⇵','⟺','⍩','∞','⍙','⌭','⌮','〶','㊋'];
        const star = stars[Math.floor(Math.random()*stars.length)];
        let [date, time] = new Date()
        .toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })
        .split(",");
        let menu = `╭═══〘 ${BOT_NAME} 〙═══⊷❍
┃${star}╭──────────────
┃${star}│
┃${star}│ owner : ${OWNER_NAME}
┃${star}│ user : ${message.pushName}
┃${star}│ mode : ${WORK_TYPE}
┃${star}│ server : null
┃${star}│ available ram: 10GB
┃${star}│ version: 2.0.1
┃${star}│
┃${star}│
┃${star}│  ▎▍▌▌▉▏▎▌▉▐▏▌▎
┃${star}│  ▎▍▌▌▉▏▎▌▉▐▏▌▎
┃${star}│  ${BOT_NAME}
┃${star}│ 
┃${star}╰───────────────
╰══════════════════⊷❍`;
      let cmnd = [];
      let cmd;
      let category = [];
      plugins.commands.map((Bixby, num) => {
        if (Bixby.pattern) {
          cmd = Bixby.pattern
            .toString()
            .match(/(\W*)([A-Za-züşiğ öç1234567890]*)/)[2];
        }

        if (!Bixby.dontAddCommandList && cmd !== undefined) {
          let type;
          if (!Bixby.type) {
            type = "misc";
          } else {
            type = Bixby.type.toLowerCase();
          }

          cmnd.push({ cmd, type: type });

          if (!category.includes(type)) category.push(type);
        }
      });
      cmnd.sort();
      category.sort().forEach((cmmd) => {
        menu += `\n╭═══〘 *${cmmd}* 〙═══⊷❍\n┃${star}╭───────────❍`;
        let comad = cmnd.filter(({ type }) => type == cmmd);
        comad.forEach(({ cmd }, num) => {
          menu += `\n┃${star}│ ${(num += 1)}. ${cmd.trim()}`;
        });
        menu += `\n┃${star}╰────────────❍\n╰════════════⊷❍`;
      });
      

return await message.client.sendMessage(message.jid,{
  image: await getBuffer(BOT_IMG),
  caption: tiny(menu)
}, { quoted: message })
    } catch (error) {
        console.error("Error in menu command:", error);
    }
});
