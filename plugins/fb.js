const { Bixby , getBuffer, isPublic } = require("../lib");
const { CAPTION } = require("../config");
const  dl = require("@xaviabot/fb-downloader");
const fetch = require("node-fetch");

 Bixby({
 pattern: "fb",
 on: "text",
 fromMe: isPublic,  
 desc: "downloader"
},

async(message , match)=>{
try{
if(!match.includes("facebook.com")) return;
await message.reply("downloading please wait ⏳");
let {sd , hd ,thumbnail}= await dl(match);
let img = await getBuffer(thumbnail);
if(match.split(";")[1] == "hd"){
await message.client.sendMessage(message.jid , {video: {url: hd} , caption: CAPTION , thumbnail: img }, {quoted: message});
}
 
let rs = await (await fetch(sd)).buffer();

await message.client.sendMessage(message.jid , {video:  rs, caption: CAPTION , thumbnail: img }, {quoted: message});
}catch(e){
await message.reply(`
*Download failed 
Error: ${e}*
`)
}
});
