const { Bixby , isPrivate }= require('../lib/');
const fs = require('fs');
const { CAPTION } = require("../config");

Bixby({ pattern: "sends", fromMe: isPrivate, type: "search",}, async(message,client) => {
if(!message.quoted) return message.reply("reply to image/video!")
if (message.quoted.videoMessage) {
cap = message.quoted?.videoMessage?.caption || {CAPTION};
let location = await message.quoted.download();
return await client.sendMessage(message.from, { video: location, caption: cap });
}else if (message.quoted.imageMessage) {
cap = message.quoted?.imageMessage?.caption || {CAPTION};
let location = await message.quoted.download()
return await client.sendMessage(message.from, { image: location, caption: cap });
   } else if(message.quoted.audioMessage){
let location = await message.quoted.download()
return await client.sendMessage(message.from, { audio: location, mimetype: "audio/mp4",ptt: false});
   }      
});
