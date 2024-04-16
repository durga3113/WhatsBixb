const { Bixby, isUrl, isPublic } = require("../lib/");
const { webp2mp4, toAudio } = require("../lib/functions");
let gis = require("g-i-s");
const jimp = require("jimp");
const { RMBG_KEY } = require("../config");
let { unlink } = require("fs/promises");
const got = require("got");
const FormData = require("form-data");
const stream = require("stream");
const { promisify } = require("util");
const pipeline = promisify(stream.pipeline);
const fs = require("fs");

async function gimage(query, amount = 5) {
  let list = [];
  return new Promise((resolve, reject) => {
    gis(query, async (error, result) => {
      for (
        var i = 0;
        i < (result.length < amount ? result.length : amount);
        i++
      ) {
        list.push(result[i].url);
        resolve(list);
      }
    });
  });
}


Bixby(
  {
    pattern: "img",
    fromMe: isPublic,
    desc: "Google Image search",
    type: "downloader",
  },
  async (message, match) => {
    if (!match) return await message.sendMessage(" *Need Query*! *Example: .img messi || .img query,conut*");
    let [query, amount] = match.split(",");
    let result = await gimage(query, amount);
    await message.sendMessage(
      ` *Downloading ${amount || 5} images for ${query}*`
    );
    for (let i of result) {
      await message.sendFromUrl(i);
    }
  }
);

Bixby(
  {
    pattern: "photo",
    fromMe: isPublic,
    desc: "Changes sticker to Photo",
    type: "converter",
  },
  async (message, match, m) => {
    if (!message.reply_message)
      return await message.reply(" *Reply to a sticker*");
    if (message.reply_message.mtype !== "stickerMessage")
      return await message.reply(" *Not a sticker*");
    let buff = await m.quoted.download();
    return await message.sendMessage(buff, {}, "image");
  }
);

Bixby(
  {
    pattern: "mp4",
    fromMe: isPublic,
    desc: "Changes sticker to Video",
    type: "converter",
  },
  async (message, match, m) => {
    if (!message.reply_message)
      return await message.reply(" *Reply to a sticker*");
    if (message.reply_message.mtype !== "stickerMessage")
      return await message.reply(" *Not a sticker*");
    let buff = await m.quoted.download();
    let buffer = await webp2mp4(buff);
    return await message.sendMessage(buffer, {}, "video");
  }
);

Bixby(
  {
    pattern: "mp3",
    fromMe: isPublic,
    desc: "converts video/voice to mp3",
    type: "downloader",
  },
  async (message, match, m) => {
    //if(message.reply_message.text) return await message.reply(' *Enter Video Name*')
    let buff = await m.quoted.download();
    buff = await toAudio(buff, "mp3");
    return await message.sendMessage(buff, { mimetype: "audio/mpeg", quoted: message }, "audio");
  }
);


Bixby(
  {
    pattern: "fetch",
    fromMe: isPublic,
    desc: "Downloads from a direct link",
    type: "downloader",
  },
  async (message, match) => {
    match = match || message.reply_message.text;
    if (!match)
      return message.reply(
        " *Send a direct media link*\n_*link;caption(optional)*_"
      );
    try {
      let url = match.split(";")[0];
      let options = {};
      options.caption = match.split(";")[1];

      if (isUrl(url)) {
        message.sendFromUrl(url, options);
      } else {
        message.reply(" *Not a URL*");
      }
    } catch (e) {
      console.log(e);
      message.reply(" *No content found*");
    }
  }
);
