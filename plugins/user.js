const { Bixby } = require("../lib");

Bixby(
  {
    pattern: "setpp",
    fromMe: true,
    type: "user",
  },
  async (message, match, m) => {
    if (!message.reply_message.image)
      return await message.reply(" *Please Reply To A Photo*");
    let buff = await m.quoted.download();
    await message.setPP(message.user, buff);
    return await message.reply(" *Profile Picture Updated*");
  }
);


Bixby(
  {
    pattern: "setname",
    fromMe: true,
    desc: "Set User name",
    type: "user",
  },
  async (message, match) => {
    if (!match) return await message.reply("_Enter name_");
    await message.updateName(match);
    return await message.reply(` *Username Updated : ${match}*`);
  }
);

Bixby(
  {
    pattern: "jid",
    fromMe: true,
    desc: "Give jid of chat/user",
    type: "user",
  },
  async (message, match) => {
    return await message.sendMessage(
      message.mention[0] || message.reply_message.jid || message.jid
    );
  }
);


Bixby(
  {
    pattern: "dlt",
    fromMe: true,
    desc: "deletes a message",
    type: "user",
  },
  async (message, match,m,client) => {
    if (message.isGroup) {
      client.sendMessage(message.jid, { delete: message.reply_message.key })
    }
  }
);
