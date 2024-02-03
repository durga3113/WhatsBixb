/* Copyright (C) 2023 DX-MODS.
Licensed under the MIT License;
you may not use this file except in compliance with the License.
WhatsBixby - Ziyan
*/

const { Bixby, isPublic, tiny } = require("../lib/");
const axios = require('axios')
const { BASE_URL, API_KEY } = require("../config");

Bixby({
	pattern: 'ig ?(.*)',	
	fromMe: isPublic,
	desc: 'insta profile search',
  type: 'search',
  },
  async (message, match) => {
match = match || message.reply_message.text;
 if (!match) return await message.reply("*_Give me user name*");
const response = await axios.get(`${BASE_URL}api/ig/stalk?username=${match}&apikey=${API_KEY}`
       );

const { full_name, username, profile_pic_url, posts, following, followers, biography, is_private, is_verified } = response.data.result.user_info;
const Text = `\`\`\`\nusername : ${username}\nname : ${full_name}\nposts : ${posts}\nfollowers : ${followers}\nfollowing : ${following}\nprivate account: ${is_private}\nverified account: ${is_verified}\nbio : ${biography}\n\`\`\``;
        
const buttonMessage = {
    image: {url: profile_pic_url},
    caption: Text,
}

message.client.sendMessage(message.jid, buttonMessage, { quoted: message })

})
