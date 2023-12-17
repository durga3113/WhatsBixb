/* Copyright (C) 2023 DX-MODS.
Licensed under the MIT License;
you may not use this file except in compliance with the License.
WhatsBixby - Ziyan
*/

const {Bixby, isPublic} = require('../lib/')
const {bixbybuffer} = require('bixby-md');
const {BASE_URL} = require("../config");

Bixby({pattern: "flaming ?(.*)",fromMe: isPublic,dontAddCommandList: false,type: "Textpro",}, async(message, match) => {
match = match || message.reply_message.text;
    if (!match) return await message.reply("*_Enter The Name_*");
  
var api_url = `${BASE_URL}api/photooxy/flaming?text=${match}&apikey=8coTqIYPs6`
var image = await bixbybuffer(api_url);
const buttonMessage = {
    image: image,
}

message.client.sendMessage(message.jid, buttonMessage, { quoted: message })

})

Bixby({pattern: "shadowsky ?(.*)",fromMe: isPublic,dontAddCommandList: false,type: "Textpro",}, async(message, match) => {
match = match || message.reply_message.text;
    if (!match) return await message.reply("*_Enter The Name_*");
  
var api_url = `${BASE_URL}api/photooxy/shadow-sky?text=${match}&apikey=8coTqIYPs6`
var image = await bixbybuffer(api_url);
const buttonMessage = {
    image: image,
}

message.client.sendMessage(message.jid, buttonMessage, { quoted: message })

})

Bixby({pattern: "metallic ?(.*)",fromMe: isPublic,dontAddCommandList: false,type: "Textpro",}, async(message, match) => {
match = match || message.reply_message.text;
    if (!match) return await message.reply("*_Enter The Name_*");
  
var api_url = `${BASE_URL}api/photooxy/metallic?text=${match}&apikey=8coTqIYPs6`
var image = await bixbybuffer(api_url);
const buttonMessage = {
    image: image,
}

message.client.sendMessage(message.jid, buttonMessage, { quoted: message })

})

Bixby({pattern: "naruto ?(.*)",fromMe: isPublic,dontAddCommandList: false,type: "Textpro",}, async(message, match) => {
match = match || message.reply_message.text;
    if (!match) return await message.reply("*_Enter The Name_*");
  
var api_url = `${BASE_URL}api/photooxy/naruto?text=${match}&apikey=8coTqIYPs6`
var image = await bixbybuffer(api_url);
const buttonMessage = {
    image: image,
}

message.client.sendMessage(message.jid, buttonMessage, { quoted: message })

})

Bixby({pattern: "pubg ?(.*)",fromMe: isPublic,dontAddCommandList: false,type: "Textpro",}, async(message, match) => {
match = match || message.reply_message.text;
    if (!match) return await message.reply("*_Enter The Name_*");
  
var api_url = `${BASE_URL}api/photooxy/pubg-mobile?text=${match}&apikey=8coTqIYPs6`
var image = await bixbybuffer(api_url);
const buttonMessage = {
    image: image,
}

message.client.sendMessage(message.jid, buttonMessage, { quoted: message })

})

