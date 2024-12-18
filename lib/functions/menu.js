const { getBuffer } = require("..");
const { events } = require("../events");
const { OWNER_NAME, BOT_NAME, WORK_TYPE, BOT_IMG } = require("../../config");
const { tiny } = require(".");

async function sendMenu(message){
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
┃${star}│ available ram: 12Gb
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
      events.commands.map((command, num) => {
        if (command.pattern) {
          cmd = command.pattern
            .toString()
            .match(/(\W*)([A-Za-züşiğ öç1234567890]*)/)[2];
        }

        if (!command.dontAddCommandList && cmd !== undefined) {
          let type;
          if (!command.type) {
            type = "misc";
          } else {
            type = command.type.toLowerCase();
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
}

module.exports = { sendMenu };
