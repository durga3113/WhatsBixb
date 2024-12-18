const { Bixby, isPrivate } = require("../lib");
const { sendMenu } = require("../lib/functions");

Bixby({
 pattern: "menu",
 fromMe: isPrivate,
 desc: "show your menu items",
 type: "information",
 },
 async (message, match) => {			
 return await sendMenu(message);
})
