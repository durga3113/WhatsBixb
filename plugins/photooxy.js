/* Copyright (C) 2024 DX-MODS.
Licensed under the MIT License;
you may not use this file except in compliance with the License.
WhatsBixby - Ziyan
*/

const {Bixby, isPublic, getBuffer } = require("../lib/");
const { BASE_URL, API_KEY } = require("../config");

Bixby({pattern: "flaming",fromMe: isPublic,dontAddCommandList: false,type: "textpro",}, async(message, match) => {
match = match || message.reply_message.text;
    if (!match) return await message.reply("*_Enter The Name_*");
  
var api_url = `${BASE_URL}api/photooxy/flaming?text=${match}&apikey=API_KEY`
var image = await getBuffer(api_url);
const buttonMessage = {
    image: image,
}

message.client.sendMessage(message.jid, buttonMessage, { quoted: message })

})

Bixby({pattern: "shadowsky",fromMe: isPublic,dontAddCommandList: false,type: "textpro",}, async(message, match) => {
match = match || message.reply_message.text;
    if (!match) return await message.reply("*_Enter The Name_*");
  
var api_url = `${BASE_URL}api/photooxy/shadow-sky?text=${match}&apikey=API_KEY`
var image = await getBuffer(api_url);
const buttonMessage = {
    image: image,
}

message.client.sendMessage(message.jid, buttonMessage, { quoted: message })

})

Bixby({pattern: "metallic",fromMe: isPublic,dontAddCommandList: false,type: "textpro",}, async(message, match) => {
match = match || message.reply_message.text;
    if (!match) return await message.reply("*_Enter The Name_*");
  
var api_url = `${BASE_URL}api/photooxy/metallic?text=${match}&apikey=API_KEY`
var image = await getBuffer(api_url);
const buttonMessage = {
    image: image,
}

message.client.sendMessage(message.jid, buttonMessage, { quoted: message })

})

Bixby({pattern: "naruto",fromMe: isPublic,dontAddCommandList: false,type: "textpro",}, async(message, match) => {
match = match || message.reply_message.text;
    if (!match) return await message.reply("*_Enter The Name_*");
  
var api_url = `${BASE_URL}api/photooxy/naruto?text=${match}&apikey=API_KEY`
var image = await getBuffer(api_url);
const buttonMessage = {
    image: image,
}

message.client.sendMessage(message.jid, buttonMessage, { quoted: message })

})

Bixby({pattern: "pubg",fromMe: isPublic,dontAddCommandList: false,type: "textpro",}, async(message, match) => {
match = match || message.reply_message.text;
    if (!match) return await message.reply("*_Enter The Name_*");
  
var api_url = `${BASE_URL}api/photooxy/pubg-mobile?text=${match}&apikey=API_KEY`
var image = await getBuffer(api_url);
const buttonMessage = {
    image: image,
}

message.client.sendMessage(message.jid, buttonMessage, { quoted: message })

})

Bixby({pattern: "pokemon",fromMe: isPublic,dontAddCommandList: false,type: "textpro",}, async(message, match) => {
match = match || message.reply_message.text;
    if (!match) return await message.reply("*_Enter The Name_*");
  
var api_url = `${BASE_URL}api/photooxy/pokemon?text=${match}&apikey=API_KEY`
var image = await getBuffer(api_url);
const buttonMessage = {
    image: image,
}

message.client.sendMessage(message.jid, buttonMessage, { quoted: message })

})

Bixby({pattern: "blackpink",fromMe: isPublic,dontAddCommandList: false,type: "textpro",}, async(message, match) => {
match = match || message.reply_message.text;
    if (!match) return await message.reply("*_Enter The Name_*");
  
var api_url = `${BASE_URL}api/photooxy/blackpink?text=${match}&apikey=API_KEY`
var image = await getBuffer(api_url);
const buttonMessage = {
    image: image,
}

message.client.sendMessage(message.jid, buttonMessage, { quoted: message })

})

Bixby({pattern: "wood3d",fromMe: isPublic,dontAddCommandList: false,type: "textpro",}, async(message, match) => {
match = match || message.reply_message.text;
    if (!match) return await message.reply("*_Enter The Name_*");
  
var api_url = `${BASE_URL}api/photooxy/wood3dblack?text=${match}&apikey=API_KEY`
var image = await getBuffer(api_url);
const buttonMessage = {
    image: image,
}

message.client.sendMessage(message.jid, buttonMessage, { quoted: message })

})

Bixby({pattern: "neonglow",fromMe: isPublic,dontAddCommandList: false,type: "textpro",}, async(message, match) => {
match = match || message.reply_message.text;
    if (!match) return await message.reply("*_Enter The Name_*");
  
var api_url = `${BASE_URL}api/photooxy/glowingneon?text=${match}&apikey=API_KEY`
var image = await getBuffer(api_url);
const buttonMessage = {
    image: image,
}

message.client.sendMessage(message.jid, buttonMessage, { quoted: message })

})

Bixby({pattern: "smokeeffect",fromMe: isPublic,dontAddCommandList: false,type: "textpro",}, async(message, match) => {
match = match || message.reply_message.text;
    if (!match) return await message.reply("*_Enter The Name_*");
  
var api_url = `${BASE_URL}api/photooxy/smokeeffect?text=${match}&apikey=API_KEY`
var image = await getBuffer(api_url);
const buttonMessage = {
    image: image,
}

message.client.sendMessage(message.jid, buttonMessage, { quoted: message })

})

Bixby({pattern: "harrypotter",fromMe: isPublic,dontAddCommandList: false,type: "textpro",}, async(message, match) => {
match = match || message.reply_message.text;
    if (!match) return await message.reply("*_Enter The Name_*");
  
var api_url = `${BASE_URL}api/photooxy/harrypotter?text=${match}&apikey=API_KEY`
var image = await getBuffer(api_url);
const buttonMessage = {
    image: image,
}

message.client.sendMessage(message.jid, buttonMessage, { quoted: message })

})

Bixby({pattern: "flower-typo",fromMe: isPublic,dontAddCommandList: false,type: "textpro",}, async(message, match) => {
match = match || message.reply_message.text;
    if (!match) return await message.reply("*_Enter The Name_*");
  
var api_url = `${BASE_URL}api/photooxy/flower-typography?text=${match}&apikey=API_KEY`
var image = await getBuffer(api_url);
const buttonMessage = {
    image: image,
}

message.client.sendMessage(message.jid, buttonMessage, { quoted: message })

})

Bixby({pattern: "coffecup",fromMe: isPublic,dontAddCommandList: false,type: "textpro",}, async(message, match) => {
match = match || message.reply_message.text;
    if (!match) return await message.reply("*_Enter The Name_*");
  
var api_url = `${BASE_URL}api/photooxy/coffe-cup?text=${match}&apikey=API_KEY`
var image = await getBuffer(api_url);
const buttonMessage = {
    image: image,
}

message.client.sendMessage(message.jid, buttonMessage, { quoted: message })

})

Bixby({pattern: "metalglow",fromMe: isPublic,dontAddCommandList: false,type: "textpro",}, async(message, match) => {
match = match || message.reply_message.text;
    if (!match) return await message.reply("*_Enter The Name_*");
  
var api_url = `${BASE_URL}api/photooxy/metal-glow?text=${match}&apikey=API_KEY`
var image = await getBuffer(api_url);
const buttonMessage = {
    image: image,
}

message.client.sendMessage(message.jid, buttonMessage, { quoted: message })

})

Bixby({pattern: "woodblock",fromMe: isPublic,dontAddCommandList: false,type: "textpro",}, async(message, match) => {
match = match || message.reply_message.text;
    if (!match) return await message.reply("*_Enter The Name_*");
  
var api_url = `${BASE_URL}api/photooxy/woodblock?text=${match}&apikey=API_KEY`
var image = await getBuffer(api_url);
const buttonMessage = {
    image: image,
}

message.client.sendMessage(message.jid, buttonMessage, { quoted: message })

})

Bixby({pattern: "metalneon",fromMe: isPublic,dontAddCommandList: false,type: "textpro",}, async(message, match) => {
match = match || message.reply_message.text;
    if (!match) return await message.reply("*_Enter The Name_*");
  
var api_url = `${BASE_URL}api/photooxy/metalneon?text=${match}&apikey=API_KEY`
var image = await getBuffer(api_url);
const buttonMessage = {
    image: image,
}

message.client.sendMessage(message.jid, buttonMessage, { quoted: message })

})

Bixby({pattern: "burnpaper",fromMe: isPublic,dontAddCommandList: false,type: "textpro",}, async(message, match) => {
match = match || message.reply_message.text;
    if (!match) return await message.reply("*_Enter The Name_*");
  
var api_url = `${BASE_URL}api/photooxy/burnpaper?text=${match}&apikey=API_KEY`
var image = await getBuffer(api_url);
const buttonMessage = {
    image: image,
}

message.client.sendMessage(message.jid, buttonMessage, { quoted: message })

})

Bixby({pattern: "nightsky",fromMe: isPublic,dontAddCommandList: false,type: "textpro",}, async(message, match) => {
match = match || message.reply_message.text;
    if (!match) return await message.reply("*_Enter The Name_*");
  
var api_url = `${BASE_URL}api/photooxy/nightsky?text=${match}&apikey=API_KEY`
var image = await getBuffer(api_url);
const buttonMessage = {
    image: image,
}

message.client.sendMessage(message.jid, buttonMessage, { quoted: message })

})

Bixby({pattern: "cemetery-gate",fromMe: isPublic,dontAddCommandList: false,type: "textpro",}, async(message, match) => {
match = match || message.reply_message.text;
    if (!match) return await message.reply("*_Enter The Name_*");
  
var api_url = `${BASE_URL}api/photooxy/cemetery-gate?text=${match}&apikey=API_KEY`
var image = await getBuffer(api_url);
const buttonMessage = {
    image: image,
}

message.client.sendMessage(message.jid, buttonMessage, { quoted: message })

})

Bixby({pattern: "underocean",fromMe: isPublic,dontAddCommandList: false,type: "textpro",}, async(message, match) => {
match = match || message.reply_message.text;
    if (!match) return await message.reply("*_Enter The Name_*");
  
var api_url = `${BASE_URL}api/photooxy/underocean?text=${match}&apikey=API_KEY`
var image = await getBuffer(api_url);
const buttonMessage = {
    image: image,
}

message.client.sendMessage(message.jid, buttonMessage, { quoted: message })

})

Bixby({pattern: "partyneon",fromMe: isPublic,dontAddCommandList: false,type: "textpro",}, async(message, match) => {
match = match || message.reply_message.text;
    if (!match) return await message.reply("*_Enter The Name_*");
  
var api_url = `${BASE_URL}api/photooxy/partyneon?text=${match}&apikey=API_KEY`
var image = await getBuffer(api_url);
const buttonMessage = {
    image: image,
}

message.client.sendMessage(message.jid, buttonMessage, { quoted: message })

})

Bixby({pattern: "graffiti",fromMe: isPublic,dontAddCommandList: false,type: "textpro",}, async(message, match) => {
match = match || message.reply_message.text;
    if (!match) return await message.reply("*_Enter The Name_*");
  
var api_url = `${BASE_URL}api/photooxy/graffiti?text=${match}&apikey=API_KEY`
var image = await getBuffer(api_url);
const buttonMessage = {
    image: image,
}

message.client.sendMessage(message.jid, buttonMessage, { quoted: message })

})

Bixby({pattern: "candy-text",fromMe: isPublic,dontAddCommandList: false,type: "textpro",}, async(message, match) => {
match = match || message.reply_message.text;
    if (!match) return await message.reply("*_Enter The Name_*");
  
var api_url = `${BASE_URL}api/photooxy/candy-text?text=${match}&apikey=API_KEY`
var image = await getBuffer(api_url);
const buttonMessage = {
    image: image,
}

message.client.sendMessage(message.jid, buttonMessage, { quoted: message })

})
