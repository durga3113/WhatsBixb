const { Bixby, isPrivate, getBuffer } = require("../lib");
const { events } = require("../lib/events");
const { OWNER_NAME, BOT_NAME, WORK_TYPE, BOT_IMG } = require("../config");
const { tiny } = require("../lib/functions");

Bixby({
    pattern: "menu",
    fromMe: isPrivate,
    desc: "Show your menu items",
    type: "information"
}, async (message) => {
    try {
        // Define star symbols
        const stars = ['☼︎', '★', '✦', '✬', '⁂', '✢', '✣', '✥', '✲', '⌤', '⇵', '⟺', '⍩', '∞', '⍙', '⌭', '⌮', '〶', '㊋'];
        const star = stars[Math.floor(Math.random() * stars.length)];

        // Get current date and time
        const [date, time] = new Date()
            .toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })
            .split(",");

        // Construct menu header
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

        // Initialize command lists and categories
        let cmnd = [];
        let cmd;
        let category = [];

        // Populate commands and categories
        events.commands.forEach((command) => {
            if (command.pattern) {
                cmd = command.pattern
                    .toString()
                    .match(/(\W*)([A-Za-züşiğ öç1234567890]*)/)[2];
            }

            if (!command.dontAddCommandList && cmd) {
                const type = command.type ? command.type.toLowerCase() : "misc";
                cmnd.push({ cmd, type });

                if (!category.includes(type)) category.push(type);
            }
        });

        // Sort commands and categories
        cmnd.sort((a, b) => a.cmd.localeCompare(b.cmd));
        category.sort();

        // Construct menu with commands grouped by category
        category.forEach((cmmd) => {
            menu += `\n╭═══〘 *${cmmd}* 〙═══⊷❍\n┃${star}╭───────────❍`;
            const comad = cmnd.filter(({ type }) => type === cmmd);
            comad.forEach(({ cmd }, num) => {
                menu += `\n┃${star}│ ${(num + 1)}. ${cmd.trim()}`;
            });
            menu += `\n┃${star}╰────────────❍\n╰════════════⊷❍`;
        });

        // Send the menu as an image message
        return await message.client.sendMessage(message.jid, {
            image: await getBuffer(BOT_IMG),
            caption: tiny(menu)
        }, { quoted: message });
    } catch (error) {
        console.error("Error in menu command:", error);
    }
});
