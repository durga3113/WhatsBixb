/*Copyright (C) 2024 DX-MODS.
Licensed under the MIT License;
you may not use this file except in compliance with the License.
WhatsBixby - Ziyan
*/

const { Bixby, isPublic, getBuffer } = require("../lib/");
const { tiny } = require("../lib/functions/fancy");
const { BASE_URL, API_KEY, CAPTION } = require("../config");
const axios = require("axios");

Bixby(
  {
    pattern: "bardai",
    fromMe: isPublic,
    desc: "get data from bardai",
    type: "ai",
  },
  async (message, match) => {
  match = match || message.reply_message.text;
  if (!match) return await message.reply("*_Give me any math questions*");
  const response = await axios.get(`${BASE_URL}api/ai/bardai?q=${match}&apikey=${API_KEY}`);    
  if (response.data) {
  return message.reply(`*BARD AI*\n\n${response.data.result}`);
  } else {
  return message.reply('*_Unable to process the request_*');
  }
  });

Bixby(
  {
    pattern: "blackbox",
    fromMe: isPublic,
    desc: "blackbox ai",
    type: "ai",
  },
  async (message, match) => {
  match = match || message.reply_message.text;
  if (!match) return await message.reply("*_Give me any prompt");
  const response = await axios.get(`${BASE_URL}api/ai/blackboxai?q=${match}&apikey=${API_KEY}`);    
  if (response.data) {
  return message.reply(`*BLACK BOX AI*\n\n${response.data.result}`);
  } else {
  return message.reply('*_Unable to process the request_*');
  }
  });

Bixby(
  {
    pattern: "promptai",
    fromMe: isPublic,
    desc: "generate prompt with ai",
    type: "ai",
  },
  async (message, match) => {
  match = match || message.reply_message.text;
  if (!match) return await message.reply("*_Give me any query*");
  const response = await axios.get(`${BASE_URL}api/ai/prompt-gen?q=${match}&apikey=${API_KEY}`);    
  if (response.data) {
  const promptdata = response.data.result.map(pdata => {
  return `prompt: ${pdata.text}\n`;
  }).join('');
  return message.reply(tiny(`*PROMPT AI*\n\n${promptdata}`));
  } else {
  message.reply('api key limit is over');
  }
  });

Bixby(
  {
    pattern: "gemini",
    fromMe: isPublic,
    desc: "get data from gemini",
    type: "ai",
  },
  async (message, match) => {
  match = match || message.reply_message.text;
  if (!match) return await message.reply("*_Give me any query*");
  const response = await axios.get(`${BASE_URL}api/ai/gemini?q=${match}&apikey=${API_KEY}`);    
  if (response.data) {
  return message.reply(tiny(`*GEMINI AI*\n\n${response.data.result}`));
  } else {
  return message.reply('*_Unable to process the request_*');
  }
  });

//simsimi is not a advanced chatbot it was developed in 2002 use it for fun purposes

Bixby(
  {
    pattern: "simi",
    fromMe: isPublic,
    desc: "simi chatbot",
    type: "ai",
  },
  async (message, match) => {
  match = match || message.reply_message.text;
  if (!match) return await message.reply("*_Give me any query*");
  const response = await axios.get(`${BASE_URL}api/ai/simi?q=${match}&apikey=${API_KEY}`);    
  if (response.data) {
  return message.reply(tiny(`*SIMI AI*\n\n${response.data.result}`));
  } else {
  return message.reply('*_Unable to process the request_*');
  }
  });

Bixby(
  {
    pattern: "diffusion",
    fromMe: isPublic,
    desc: "stable diffusion ai",
    type: "ai",
  },
  async (message, match) => {
  match = match || message.reply_message.text;
  if (!match) return await message.reply("please enter any query or prompt to generate image");
  var url = `${BASE_URL}api/ai/stablediffusion?q=${match}&apikey=${API_KEY}`
  var image = await getBuffer(url);
  const buttonMessage = {
  image: image,
  caption: CAPTION,
  }
  message.client.sendMessage(message.jid, buttonMessage, { quoted: message })
  });

Bixby(
  {
    pattern: "dalle",
    fromMe: isPublic,
    desc: "dalle image ai",
    type: "ai",
  },
  async (message, match) => {
  match = match || message.reply_message.text;
  if (!match) return await message.reply("please enter any query or prompt to generate image");
  var url = `${BASE_URL}api/ai/dalle?q=${match}&apikey=${API_KEY}`
  var image = await getBuffer(url);
  const buttonMessage = {
  image: image,
  caption: CAPTION,
  }
  message.client.sendMessage(message.jid, buttonMessage, { quoted: message })
  });
