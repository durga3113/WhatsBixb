/* Copyright (C) 2024 DX-MODS.
Licensed under the MIT License;
you may not use this file except in compliance with the License.
WhatsBixby - Ziyan
*/

const { Bixby, isPublic, isUrl, getJson } = require("../lib/");
const { BASE_URL, API_KEY } = require("../config"); 
const {bixbybuffer} = require('bixby-md');

Bixby(
  {
    pattern: "pindl ?(.*)",
    fromMe: isPublic,
    desc: "download from pinterest",
    type: "downloader",
  },
  async (message, match) => {
		if (!match) return await message.reply('Please provide a Pinterest URL');
		if (!isUrl(match)) return await message.reply('Please provide a valid Pinterest URL');
		const {
			result
		} = await getJson(`${BASE_URL}api/downloader/pinterest?url=${match}&apikey=${API_KEY}`);
    if (result.data.media_type === "image/jpeg") {
    var image = await bixbybuffer(result.data.image);
    const imageMessage = {
    image: image,
    caption: result.data.title,
}

message.client.sendMessage(message.jid, imageMessage) 
  
}	
	if (result.data.media_type === "video/mp4") {
	var video = await bixbybuffer(result.data.image);
  const videoMessage = {
    video: video,
    caption: result.data.title,
}

message.client.sendMessage(message.jid, videoMessage) 
  
}
});
