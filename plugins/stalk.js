/* Copyright (C) 2024 DX-MODS.
Licensed under the MIT License;
you may not use this file except in compliance with the License.
WhatsBixby - Ziyan
*/


const { Bixby, isPublic } = require("../lib");
const tiny = require("../lib/functions/fancy");
const axios = require("axios");
const { BASE_URL, API_KEY } = require("../config");

Bixby(
  {
    pattern: "igsearch",
    fromMe: isPublic,
    desc: "insta profile search",
    type: "search",
  },
async (message, match) => {
match = match || message.reply_message.text;
if (!match) return await message.reply("*_Give me user name*");
const response = await axios.get(`${BASE_URL}api/ig/stalk?username=${match}&apikey=${API_KEY}`);

const { full_name, username, profile_pic_url, posts, following, followers, biography, is_private, is_verified } = response.data.result.user_info;
const Text = `\`\`\`\nusername : ${username}\nname : ${full_name}\nposts : ${posts}\nfollowers : ${followers}\nfollowing : ${following}\nprivate account: ${is_private}\nverified account: ${is_verified}\nbio : ${biography}\n\`\`\``;
        
const buttonMessage = {
    image: {url: profile_pic_url},
    caption: Text,
}

message.client.sendMessage(message.jid, buttonMessage, { quoted: message })

});

Bixby(
  {
   pattern: "github",	
   fromMe: isPublic,
   desc: "get user data from github",
   type: "search",
  },
async (message, match) => {
match = match || message.reply_message.text;
if (!match) return await message.reply("*_Give me user name*");
const response = await axios.get(`${BASE_URL}api/other/github-stalk?username=${match}&apikey=${API_KEY}`);
const { login, name, bio, followers, public_repos, following, blog, avatar_url } = response.data.result;
const gittext = `
* USER GITHUB INFORMATION *
_👤 Username:_ *${login}*
_👤 Name:_ *${name || 'N/A'}*
_👩‍💻 Bio:_ *${bio || 'N/A'}*
_🐌 Followers:_ *${followers}*
_🌷 Public Repos:_ *${public_repos}*
_👥 Following:_ *${following}*
_🌐 Website:_ ${blog || 'N/A'}*
`;
await message.client.sendMessage(message.jid, {
image: {
url: avatar_url,
},
caption: tiny(gittext),
}, {
quoted: message,
});
});
    
Bixby(
  {
   pattern: "tiktok",	
   fromMe: isPublic,
   desc: "search tiktok user",
   type: "search",
  },
async (message, match) => {
match = match || message.reply_message.text;
 if (!match) return await message.reply("*_Give me user name*");
const response = await axios.get(`${BASE_URL}api/stalk/tiktok?user=${match}&apikey=${API_KEY}`);

const { username, description, likes, followers, following, totalPosts, profile } = response.data.result;
const tiktok = `\`\`\`\nusername : ${username}\ndescription : ${description}\n likes : ${likes}\nfollowers : ${followers}\nfollowing : ${following}\ntotal post : ${totalPosts}\n\`\`\``;
        
const buttonMessage = {
    image: {url: profile},
    caption: tiktok,
}

message.client.sendMessage(message.jid, buttonMessage, { quoted: message })

});