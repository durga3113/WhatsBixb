const { getBuffer } = require(..);
async function sendMenu(message){
		const stars = ['☼︎','★','✦','✬','⁂','✢','✣','✥','✲','⌤','⇵','⟺','⍩','∞','⍙','⌭','⌮','〶','㊋'];
        const star = stars[Math.floor(Math.random()*stars.length)];
        let [date, time] = new Date()
        .toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })
        .split(",");
        let menu = `╭═══〘 ${BOT_INFO.split(";")[0]} 〙═══⊷❍
┃${star}╭──────────────
┃${star}│
┃${star}│ owner : ${BOT_INFO.split(";")[1]}
┃${star}│ user : ${message.pushName}
┃${star}│ mode : ${MODE}
┃${star}│ server : ${config.HEROKU_APP_NAME}
┃${star}│ available ram: 12Gb
┃${star}│ version: 2.0.1
┃${star}│
┃${star}│
┃${star}│  ▎▍▌▌▉▏▎▌▉▐▏▌▎
┃${star}│  ▎▍▌▌▉▏▎▌▉▐▏▌▎
┃${star}│  ${BOT_INFO.split(";")[2]}
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
  image: await getBuffer(BOT_INFO.split(";")[3]||`https://picsum.photos/800/500`),
  caption: tiny(menu)
}, { quoted: message })
}
