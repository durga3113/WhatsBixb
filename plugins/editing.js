const { Bixby, isPublic } = require("../lib/");
const { RMBG_KEY } = require("../config");
const FormData = require("form-data");
const fs = require("fs");
const got = require("got");
const stream = require("stream");
const { promisify } = require("util");
const pipeline = promisify(stream.pipeline);
let { unlink } = require("fs/promises");

Bixby(
  {
    pattern: "removebg ?(.*)",
    fromMe: true,  
    desc: "removes background of an image",
  },
  async (message, match) => {
    if (!message.reply_message || !message.reply_message.image)
      return await message.reply("_Reply to a photo_");
    if (RMBG_KEY === false)
      return await message.reply(
        `_Get a new api key from https://www.remove.bg/api_\n_set it via_\n_setvar RMBG_KEY: api key_`
      );

    await message.reply("_Removing Background_");
    var location = await message.reply_message.downloadMediaMessage();

    var form = new FormData();
    form.append("image_file", fs.createReadStream(location));
    form.append("size", "auto");

    var rbg = await got.stream.post("https://api.remove.bg/v1.0/removebg", {
      body: form,
      headers: {
        "X-Api-Key": RMBG_KEY,
      },
    });

    await pipeline(rbg, fs.createWriteStream("rbg.png"));

    await message.sendMessage(fs.readFileSync("rbg.png"), {}, "image");
    await unlink(location);
    return await unlink("rbg.png");
  }
);
