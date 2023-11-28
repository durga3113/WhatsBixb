const { Bixby, isPrivate, tiny } = require("../lib")
const axios = require("axios")

Bixby({ pattern: "git", fromMe: isPrivate, type: "search",}, async(message,match) => {
let { data } = await axios.get(`https://api.github.com/repos/DX-MODS/WhatsBixby`)
const buttons = [
  {buttonId: 'ping', buttonText: {displayText: 'SPEED'}, type: 1},
  {buttonId: 'alive', buttonText: {displayText: 'ALIVE'}, type: 1}
]
const buttonMessage = {
  image: {url: `https://telegra.ph/file/6086f101a36f7fc14bff6.png` },
  caption: tiny(`WhatsBixby\n\n🌟Stars: ${data.stargazers_count}\n\n🚦Forks: ${data.forks_count}\n\n👀Views: ${data.watchers_count}\n\n📑Language: ${data.language}\n\n🌲Branch: ${data.default_branch}\n\n💡Created At: ${data.created_at}\n\n💈Last Update: ${data.updated_at}\n\n👁️Mode: public\n\n🔗Git Link: https://github.com/Diegoson/AMAROK-MD`),
  footer: tiny(`Bixby Inc`),
  buttons: buttons,
  headerType: 1
}
return await message.client.sendMessage(message.jid, buttonMessage, {
 quoted: message 
 })
});
