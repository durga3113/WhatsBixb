/* Copyright (C) 2024 CODEX
Licensed under the MIT License;
you may not use this file except in compliance with the License.
WhatsBixby - Ziyan
*/


const { Bixby, isPrivate } = require("../lib");
const axios = require("axios");
const { BASE_URL, API_KEY } = require("../config");

Bixby(
  {
    pattern: "ig",
    fromMe: isPrivate,
    desc: "insta profile search",
    type: "search",
  },
async (message, match) => {
match = match || message.reply_message.text
const args = match.trim();
if (!args) return await message.reply("*_Give me user name*");
const response = await axios.get(`${BASE_URL}stalk/ig?id=${args}&apikey=${API_KEY}`);

const { full_name, username, post_count, following, followers, biography, is_private, is_verified } = response.data.result;
const { profile_pic_url } = response.data.result.hd_profile_pic_url_info.url;
const Text = `\`\`\`\nusername : ${username}\nname : ${fullname}\nposts : ${post_count}\nfollowers : ${followers}\nfollowing : ${following}\nprivate account: ${is_private}\nverified account: ${is_verified}\nbio : ${biography}\n\`\`\``;        
const buttonMessage = {
    image: {url: profile_pic_url},
    caption: Text,
}

message.client.sendMessage(message.jid, buttonMessage, { quoted: message })

});

Bixby(
  {
    pattern: "github",
    fromMe: isPrivate,
    desc: "get user data from github",
    type: "search",
  },
  async (message, match) => {
    match = match || message.reply_message.text;
    const args = match.trim();

    if (!args) return await message.reply("*_Give me user name_*");

    try {
      const apiUrl = `${BASE_URL}stalk/github?id=${args}&apikey=${API_KEY}`;
      
      const response = await axios.get(apiUrl);

      // Check if response.data.result exists before destructuring
      if (!response.data.result) {
        return await message.reply("*_User data not found. Please check the username and try again._*");
      }

      const { login, name, bio, followers, public_repos, following, blog, avatar_url } = response.data.result;
      const gittext = `* USER GITHUB INFORMATION *\n👤 Username: *${login}*\n👤 Name: *${name || 'N/A'}*\n👩‍💻 Bio: *${bio || 'N/A'}*\n🐌 Followers: *${followers}*\n🌷 Public Repos: *${public_repos}*\n👥 Following: *${following}*\n🌐 Website: ${blog || 'N/A'}`;
      await message.client.sendMessage(
        message.jid,
        {
          image: { url: avatar_url },
          caption: gittext,
        },
        { quoted: message }
      );
    } catch (error) {
      console.error(error);
      await message.reply("*_An error occurred while fetching user data. Please try again later._*");
    }
  }
);

