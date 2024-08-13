/*Copyright (C) 2024 DX-MODS.
Licensed under the MIT License;
you may not use this file except in compliance with the License.
WhatsBixby - Ziyan
*/

const { Bixby, isPublic, isUrl, getJson, getBuffer } = require("../lib/");
const { BASE_URL, API_KEY, CAPTION } = require("../config"); 
const axios = require("axios");

Bixby(
  {
    pattern: "pindl",
    fromMe: isPublic,
    desc: "download from pinterest",
    type: "downloader",
  },
  async (message, match) => {
  if (!match) return await message.reply('Please provide a Pinterest URL');
  if (!isUrl(match)) return await message.reply('Please provide a valid Pinterest URL');
  const { result } = await getJson(`${BASE_URL}api/downloader/pinterest?url=${match}&apikey=${API_KEY}`);
  if (result.data.media_type === "image/jpeg") {
  var image = await getBuffer(result.data.image);
  const imageMessage = {
  image: image,
  caption: result.data.title,
  }
  message.client.sendMessage(message.jid, imageMessage)   
  }	
  if (result.data.media_type === "video/mp4") {
  var video = await getBuffer(result.data.image);
  const videoMessage = {
  video: video,
  caption: result.data.title,
  }
  message.client.sendMessage(message.jid, videoMessage) 
  }
  });

Bixby(
  {
    pattern: "yt-thumb",
    fromMe: isPublic,
    desc: "download thumbnail from youtube",
    type: "downloader",
  },
  async(message , match)=>{
  match = match || message.reply_message.text;
  if (!match.includes("youtu.be")) return await message.reply("*enter yt url to download");
  var parts = match.split(".be/");
  var id = parts[1]; 
  var ampersandPosition = id.indexOf("?");
  if (ampersandPosition != -1) {
  id = id.substring(0, ampersandPosition);
  }
  var api_url = `${BASE_URL}api/yt-thumb?text=${id}&apikey=${API_KEY}`
  var image = await getBuffer(api_url);
  const buttonMessage = {
  image: image,
  caption: CAPTION,
  }
  message.client.sendMessage(message.jid, buttonMessage, { quoted: message })
  });

Bixby(
  {
    pattern: "animestory",
    fromMe: isPublic,
    desc: "download from pinterest",
    type: "downloader",
  },
  async (message, match) => {
  const response = await axios.get(`${BASE_URL}api/downloader/animestory&apikey=${API_KEY}`);	
  var story = await getBuffer(response.data.result.url);
  const videoMessage = {
  video: story,
  caption: CAPTION,
  }
  message.client.sendMessage(message.jid, videoMessage) 
  });

Bixby(
  {
    pattern: "tiktokdl",
    fromMe: isPublic,
    desc: "download from pinterest",
    type: "downloader",
  },
  async (message, match) => {
  if (!match) return await message.reply('Please provide a Pinterest URL');
  if (!isUrl(match)) return await message.reply('Please provide a valid Pinterest URL');
  const response = await axios.get(`${BASE_URL}api/downloader/tiktok?url=${match}&apikey=${API_KEY}`);	    
  var video = await getBuffer(response.data.result.video);
  const videoMessage = {
  video: video,
  caption: result.data.title,
  }
  message.client.sendMessage(message.jid, videoMessage) 
  });

Bixby(
  {
    pattern: "igdl",
    fromMe: isPublic,
    desc: "downloads from ig",
    type: "downloader",
  },
  async (message, match) => {
  if (!match) return await message.reply('Please provide a ig url');
  if (!isUrl(match)) return await message.reply('Please provide a valid ig url');
  const response = await axios.get(`${BASE_URL}api/downloader/ig?url=${match}&apikey=${API_KEY}`);	    
  var url = response.data.result[0].url;

  await message.sendFromUrl(url, {
        caption: CAPTION,
      });
  });

async function bufferMedia(url) {
  try {
    const response = await axios.get(url, {
      responseType: 'arraybuffer' // Ensure response is treated as a buffer
    });
    return Buffer.from(response.data, 'binary'); // Convert response data to buffer
  } catch (error) {
    console.error("Error buffering media:", error);
    throw error; // Re-throw error for handling in the main function
  }
}

Bixby(
  {
    pattern: "threads",
    fromMe: isPublic,
    desc: "download from threads",
    type: "downloader",
  },
  async (message, match) => {
    if (!match) return await message.reply('Please provide a Pinterest URL');
    if (!isUrl(match)) return await message.reply('Please provide a valid Pinterest URL');

    try {
      const response = await axios.get(`${BASE_URL}api/downloader/threads?url=${match}&apikey=${API_KEY}`);

      if (response.data.result.video_urls.length === 0) {
        const imageUrls = response.data.result.image_urls;
        
        // Select the first image URL from the array
        const imageUrl = imageUrls[0];
        
        // Buffer the image
        const imageBuffer = await bufferMedia(imageUrl);

        // Send the image
        const imageMessage = {
          image: imageBuffer,
          caption: CAPTION,
        };
        message.client.sendMessage(message.jid, imageMessage);
      } else if (response.data.result.video_urls.length > 0) { // Change here
        const videoUrl = response.data.result.video_urls[0].download_url;
        
        // Buffer the video
        const videoBuffer = await bufferMedia(videoUrl);

        // Send the video
        const videoMessage = {
          video: videoBuffer,
          caption: CAPTION,
        };
        message.client.sendMessage(message.jid, videoMessage);
      } else {
        console.error("No video URLs found.");
        // Handle the case where no video URLs are found
      }
    } catch (error) {
      console.error("Error:", error);
      // Handle error, perhaps send a message to the user
    }
  }
);

Bixby(
  {
    pattern: "ytv",
    fromMe: isPublic,
    desc: "download from youtube",
    type: "downloader",
  },
  async (message, match) => {
  if (!match) return await message.reply('Please provide a Yt URL');
  if (!isUrl(match)) return await message.reply('Please provide a valid Yt URL');
  const response = await axios.get(`${BASE_URL}api/downloader/youtube?url=${match}&apikey=${API_KEY}`);	    
  var video = await getBuffer(response.data.result.mp4);
  const videoMessage = {
  video: video,
  caption: CAPTION,
  }
  message.client.sendMessage(message.jid, videoMessage) 
  });

Bixby(
  {
    pattern: "yta",
    fromMe: isPublic,
    desc: "download from youtube",
    type: "downloader",
  },
  async (message, match) => {
  if (!match) return await message.reply('Please provide a Yt URL');
  if (!isUrl(match)) return await message.reply('Please provide a valid Yt URL');
  const response = await axios.get(`${BASE_URL}api/downloader/youtube?url=${match}&apikey=${API_KEY}`);	    
  var audio = await getBuffer(response.data.result.mp3);
  
 let add = await process.env.EXTADREPLY === undefined ? process.env.EXTADREPLY : true
    if(!add){
    message.client.sendMessage(message.jid,{audio: audio, mimetype: "audio/mpeg", fileName:"Whats Bixby.m4a"});
    }
    if(add){
      
    const logo = await getBuffer("https://avatars.githubusercontent.com/u/92292759?s=96&v=4") 	
    return await message.client.sendMessage(message.jid, {
           audio: audio,
           mimetype: 'audio/mpeg',
           ptt: true,
           waveform: ["00","99","00","99","00","99","00"],
           contextInfo: {
               externalAdReply: {
                   title: process.env.ADTITLE === undefined ? process.env.ADTITLE : "ᴛᴇxᴛ ᴄᴏɴᴠᴇʀᴛᴇʀ",
                   body: process.env.ADBODY === undefined ? process.env.ADBODY : "ᴠᴏɪᴄᴇ : ▮▮▮▮▮▮▯▯▯",
                   mediaType: 1,
                   thumbnail: process.env.ADLOGO === undefined ? process.env.ADLOGO : logo,
                   mediaUrl: process.env.ADURL === undefined ? process.env.ADURL : 'https://www.instagram.com/__ziyxn_',
                   sourceUrl: process.env.ADSCURL === undefined ? process.env.ADSCURL : 'https://www.instagram.com/__ziyxn_',
                   }
               }
           }
       )
          }
          });

Bixby(
  {
    pattern: "twitter",
    fromMe: isPublic,
    desc: "downloads from twitter",
    type: "downloader",
  },
  async (message, match) => {
  if (!match) return await message.reply('Please provide a twitter URL');
  if (!isUrl(match)) return await message.reply('Please provide a valid twitter URL');
  const response = await axios.get(`${BASE_URL}api/downloader/twitter?url=${match}&apikey=${API_KEY}`);
  var title = response.data.result.title;
  var video = await getBuffer(response.data.result.url[0].hd);
  const videoMessage = {
  video: video,
  caption: title,
  }
  message.client.sendMessage(message.jid, videoMessage) 
  });
