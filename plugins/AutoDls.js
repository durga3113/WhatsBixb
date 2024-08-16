const {
    isPrivate,
    Bixby,
    getBuffer,
    getUrl,
    igdl,
    isUrl,
    toAudio,
    getJson,
    validateQuality,
  } = require("../lib/");
  const dl = require("@xaviabot/fb-downloader");
  const fetch = require("node-fetch");
  const { yta, ytv, ytsdl } = require("../lib/functions");
  
  const isIgUrl = (text) => {
    const regex = /(https?:\/\/(?:www\.)?instagram\.com\/p\/[\w-]+\/?)/;
    const match = text.match(regex);
    return match ? match[0] : null;
};

const isFbUrl = (text) => {
    const regex = /(https?:\/\/(?:www\.)?(?:facebook\.com|fb\.com|fb\.watch)\/[^\s]+)/;
    const match = text.match(regex);
    return match ? match[0] : null;
};

const isYtUrl = (text) => {
    const regex = /(https?:\/\/(?:www\.)?(?:youtube\.com\/watch\?v=|youtu\.be\/)[\w-]+)/;
    const match = text.match(regex);
    return match ? match[0] : null;
};
  
  
  Bixby({
      on: "text",
      fromMe: isPrivate,
      desc: "Auto download media from any Url",
      type: "auto",
    },
    async (message, match) => {
      const text = match
      if (isIgUrl(text)) {
        await downloadInstaMedia(message, text);
  
      }
      else if (isFbUrl(text)) {
        await downloadFacebookMedia(message, text);
  
      }
      else if (isYtUrl(text)) {
        //await downloadInstaMedia(message, message.reply_message.text);
  
      }
    }
  );
  
  const downloadInstaMedia = async (message, match) => {
    await message.reply("_Downloading..._");
    const url = getUrl(match.trim())[0];
    try {
      const data = await getJson(
        `https://api.thexapi.xyz/api/v1/download/instagram?url=${url}`
      );
      console.log(data)
      if (data.data?.length == 0)
        return await message.sendMessage(
          message.jid,
          "No media found on the link"
        );
      data.data.forEach(async (url) => {
        await message.sendFile(url);
      });
    }
    catch (e) {
      await message.sendMessage(message.jid, "Error: " + e);
    }
  };
  
  
  const downloadFacebookMedia = async (message, match) => {
    try {
      await message.reply("_Downloading..._");
      const regex = /(https?:\/\/[^\s]+)/;
      const link = match.match(regex);
      let {
        sd,
        hd,
        title
      } = await dl(link[0]);
      let img = await getBuffer("https://avatars.githubusercontent.com/u/64305844?v=4");
      if (match.split(";")[1] == "hd") {
        await message.client.sendMessage(message.jid, {
          video: {
            url: hd
          },
          caption: "[Quality: HD]\n\n" + title,
          thumbnail: img
        }, {
          quoted: message
        });
      }
  
  
      let rs = await (await fetch(sd)).buffer();
  
      await message.client.sendMessage(message.jid, {
        video: rs,
        caption: "[Quality: SD]\n\n" + title,
        thumbnail: img
      }, {
        quoted: message
      });
    }
    catch (error) {
      await message.client.sendMessage(message.jid, "Error: " + error.message || error);
    }
  };
  
  Bixby({
      pattern: "fb",
      fromMe: isPrivate,
      desc: "fb downloader"
    },
    async (message, match) => {
      await downloadFacebookMedia(message, message.reply_message.text);
    });
  
  Bixby({
      pattern: "insta",
      fromMe: isPrivate,
      desc: "To download Instagram media",
      type: "user",
    },
    async (message, match) => {
      await downloadInstaMedia(message, match);
    }
  );
  
  
  Bixby({
      pattern: "yta",
      fromMe: isPrivate,
      desc: "Download audio from youtube",
    },
    async (message, match) => {
      match = match || message.reply_message.text;
      if (!match) return await message.reply("Give me a youtube link");
      if (!isUrl(match)) return await message.reply("Give me a youtube link");
      let {
        dlink,
        title
      } = await yta(await isYtUrl(match));
      await message.reply(`_Downloading ${title}_`);
      let buff = await getBuffer(dlink);
      buff = await toAudio(buff, "mp3");
      return await message.sendMessage(
        message.jid,
        buff, {
          mimetype: "audio/mp4",
          filename: title + ".mp3",
        },
        "audio"
      );
    }
  );
  
  Bixb({
      pattern: "ytv",
      fromMe: isPrivate,
      desc: "Download audio from youtube",
    },
    async (message, match) => {
      match = match || message.reply_message.text;
      let url = getUrl(match)[0];
      if (!url)
        return await message.reply(
          "Give me a youtube link\n\nExample: ytv youtube.com/watch?v=xxxxx 480p"
        );
      let quality = match.split(";")[1];
      if (quality && !validateQuality(quality)) {
        return await message.reply(
          "Invalid Resolution \nSupported: 144p, 240p, 360p, 480p, 720p, 1080p, 1440p, 2160p"
        );
      } else if (!quality) quality = "360p";
      if (!match)
        return await message.reply(
          "Give me a youtube link\n\nExample: ytv youtube.com/watch?v=xxxxx 480p"
        );
      if (!isUrl(match))
        return await message.reply(
          "Give me a youtube link\n\nExample: ytv youtube.com/watch?v=xxxxx 480p"
        );
      let requrl = `https://api.thexapi.xyz/api/v1/download/youtube/video?url=${url}&quality=${quality}`;
      let response = (await getJson(requrl)).data;
      const { dlink, title } = response;
      console.log(response);
      await message.reply(`_Downloading ${title}_`);
      return await message.sendMessage(
        message.jid,
        dlink, {
          mimetype: "video/mp4",
          filename: title + ".mp4",
        },
        "video"
      );
    }
  );
  
  Bixby({
      pattern: "song",
      fromMe: isPrivate,
      desc: "Download audio from youtube",
    },
    async (message, match) => {
      match = match || message.reply_message.text;
      if (!match) return await message.reply("Give me a query");
      let {
        dlink,
        title
      } = await ytsdl(match + " song");
      await message.reply(`_Downloading ${title}_`);
      let buff = await getBuffer(dlink);
      //buff = await toAudio(buff, "mp3");
      return await message.sendMessage(
        message.jid,
        buff, {
          mimetype: "audio/mpeg",
          filename: title + ".mp3",
        },
        "audio"
      );
    }
  );
  
  Bixby({
      pattern: "vid",
      fromMe: isPrivate,
      desc: "Download video from youtube",
    },
    async (message, match) => {
      match = match || message.reply_message.text;
      if (!match) return await message.reply("Give me a query");
      let {
        dlink,
        title
      } = await ytsdl(match, "video");
      await message.reply(`_Downloading ${title}_`);
      return await message.sendMessage(
        message.jid,
        dlink, {
          mimetype: "video/mp4",
          filename: title + ".mp4",
        },
        "video"
      );
    }
  );
