const config = require("../config");
const { Bixby, isPublic } = require("../lib/");
const { isAdmin, parsedJid, isUrl } = require("../lib");
const { cron, saveSchedule } = require("../lib/scheduler");

Bixby(
  {
    pattern: "join",
    fromMe: isPublic,  
    desc: "hem",
    type: "group",
  },
  async (message, match) => {
     match = match || message.reply_message.text
      let cold = match
      let hmm = cold.split("/")[3]
      await  message.client.groupAcceptInvite(hmm)
     return await message.sendMessage("_joined_")
   });

Bixby(
  {
    pattern: "add",
    fromMe: isPublic,
    desc: "*Adds a person to group*",
    type: "group",
  },
  async (message, match) => {
    if (!message.isGroup)
      return await message.reply(" *This Bixby is for groups*");
    match = match || message.reply_message.jid;
    if (!match) return await message.reply(" *Mention user to add*");
    let isadmin = await isAdmin(message.jid, message.user, message.client);
    if (!isadmin) return await message.reply(" *I'm not admin*");
    let jid = parsedJid(match);
    await message.add(jid);
    return await message.reply(`@${jid[0].split("@")[0]} *added*`, {
      mentions: jid,
    });
  }
);



Bixby(
  {
    pattern: "kick",
    fromMe: true,
    desc: "remove user from grouo",
    type: "group",
  },
  async (message, match) => {
    if (!message.isGroup)
      return await message.reply(" *This Bixby is for group only*");
    match = match || message.reply_message.jid;
    if (!match) return await message.reply(" *Mention user to kick*");
    let isadmin = await isAdmin(message.jid, message.user, message.client);
    if (!isadmin) return await message.reply(" *I'm not an admin*");
    let jid = parsedJid(match);
    await message.kick(jid);
    return await message.reply(`@${jid[0].split("@")[0]} *Kicked*`, {
      mentions: jid,
    });
  }
 
);


Bixby(
  {
    pattern: "promote",
    fromMe: isPublic,
    desc: "promote users in group",
    type: "group",
  },
  async (message, match) => {
    if (!message.isGroup)
      return await message.reply(" *This Command is for group Only*");
    match = match || message.reply_message.jid;
    if (!match) return await message.reply(" *Mention user to Promote*");
    let isadmin = await isAdmin(message.jid, message.user, message.client);
    if (!isadmin) return await message.reply(" *I'm not an Admin*");
    let jid = parsedJid(match);
    await message.promote(jid);
    return await message.reply(`@${jid[0].split("@")[0]} *Promoted As Admin*`, {
      mentions: jid,
    });
  }
);


Bixby(
  {
    pattern: "demote",
    fromMe: isPublic,
    desc: "demote users in group",
    type: "group",
  },
  async (message, match) => {
    if (!message.isGroup)
      return await message.reply(" *This Command is for group Only*");
    match = match || message.reply_message.jid;
    if (!match) return await message.reply(" *Mention user to Demote*");
    let isadmin = await isAdmin(message.jid, message.user, message.client);
    if (!isadmin) return await message.reply(" *I'm not an Admin*");
    let jid = parsedJid(match);
    await message.demote(jid);
    return await message.reply(`@${jid[0].split("@")[0]} *Demoted from Admin*`, {
      mentions: jid,
    });
  }
);



Bixby(
  {
    pattern: "mute",
    fromMe: true,
    desc: "mute group",
    type: "group",
  },
  async (message, match, m, client) => {
    if (!message.isGroup)
      return await message.reply(" *This Bixby is for groups*");
    if (!isAdmin(message.jid, message.user, message.client))
      return await message.reply(" *I'm not admin*");
    await message.reply(" *Muting*");
    return await client.groupSettingUpdate(message.jid, "announcement");
  }
);



Bixby(
  {
    pattern: "unmute",
    fromMe: true,
    desc: "unmute group",
    type: "group",
  },
  async (message, match, m, client) => {
    if (!message.isGroup)
      return await message.reply(" *This Bixby is for groups*");
    if (!isAdmin(message.jid, message.user, message.client))
      return await message.reply(" *I'm not admin*");
    await message.reply(" *Unmuting*");
    return await client.groupSettingUpdate(message.jid, "not_announcement");
  }
);


Bixby(
  {
    pattern: "amute",
    fromMe: true,
    desc: "auto mutes group",
    type: "group",
  },
  async (message, match, m, client) => {
    if (!message.isGroup)
      return await message.reply(" *This Bixby is for groups*");
    if (!match) return message.reply(" *Enter time to mute*\nEg : *amute 20:10*");

    if (!isAdmin(message.jid, message.user, message.client))
      return await message.reply(" *I'm not admin*");
    message.reply(` *Group will mute at ${match}*`);
    await saveSchedule(message.jid, match, async () => {
      await message.reply(" *Muting*");
      return await client.groupSettingUpdate(message.jid, "announcement");
    });
    return cron(match, async () => {
      await message.reply(" *Muting*");
      return await client.groupSettingUpdate(message.jid, "announcement");
    });
  }
);


Bixby(
  {
    pattern: "aunmute",
    fromMe: true,
    desc: "auto unmutes group",
    type: "group",
  },
  async (message, match, m, client) => {
    if (!message.isGroup)
      return await message.reply(" *This Bixby is for groups*");
    if (!match)
      return message.reply(" *Enter time to unmute*\nEg : *aunmute 20:10*");

    if (!isAdmin(message.jid, message.user, message.client))
      return await message.reply(" *I'm not admin*");
    message.reply(` *Group will unmute at ${match}*`);
    await saveSchedule(message.jid, match, async () => {
      await message.reply(" *Auto Unmuting*");
      return await client.groupSettingUpdate(message.jid, " *not_announcement*");
    });
    return cron(match, async () => {
      await message.reply(" *Auto Unmuting*");
      return await client.groupSettingUpdate(message.jid, " *not_announcement*");
    });
  }
);


Bixby(
  {
    pattern: "gjid",
    fromMe: true,
    desc: "gets jid of all group members",
    type: "group",
  },
  async (message, match, m, client) => {
    if (!message.isGroup)
      return await message.reply(" *This Bixby is for groups*");
    let { participants } = await client.groupMetadata(message.jid);
    let participant = participants.map((u) => u.id);
    let str = "╭──〔 *Group Jids* 〕\n";
    participant.forEach((result) => {
      str += `├ *${result}*\n`;
    });
    str += `╰──────────────`;
    message.reply(str);
  }
);


Bixby(
  {
    pattern: "tagall ?(.*)",
    fromMe: true,
    desc: "mention all users in group",
    type: "group",
  },
  async (message, match) => {
    if (!message.isGroup) return;
    const { participants } = await message.client.groupMetadata(message.jid);
    let teks = "";
    for (let mem of participants) {
      teks += ` @${mem.id.split("@")[0]}\n`;
    }
    message.sendMessage(teks.trim(), {
      mentions: participants.map((a) => a.id),
    });
  }
);



Bixby(
  {
    pattern: "tag",
    fromMe: true,
    desc: "mention all users in group",
    type: "group",
  },
  async (message, match) => {
    if (!message.isGroup) return;
    const { participants } = await message.client.groupMetadata(message.jid);
    let teks = match;
    for (let mem of participants) {
      teks += ` @${mem.id.split("@")[0]}\n`;
    }
    message.sendMessage(teks.trim(), {
      mentions: participants.map((a) => a.id),
    });
  }
);
Bixby(
  {
    pattern: "poll",
    fromMe: true,
    desc: "create poll",
    type: "group",
  },
  async (message, match) => {
       let {prefix} = message
    let [poll,opt] = match.split(";");
    if (match.split(";") < 2)
      return await message.reply(
        `${prefix}poll question;option1,option2,option3.....`
      );
    
    let options = [];

    for (let i of opt.split(',')) {
      options.push({ optionName: i });
    }
    return await message.client.relayMessage(
      message.jid,
      {
        pollCreationMessage: {
          name: poll,
          options,
          selectableOptionsCount: 0,
        },
      },
      {}
    );
  }
);



Bixby(
  {
    on: "text",
    fromMe: false,
  },
  async (message, match) => {
    if (!message.isGroup) return;
    if (config.ANTILINK)
      if (isUrl(match)) {
        await message.reply(" *Link detected❗*");
        let botadmin = await isAdmin(message.jid, message.user, message.client);
        let senderadmin = await isAdmin(
          message.jid,
          message.participant,
          message.client
        );
        if (botadmin) {
          if (!senderadmin) {
            await message.reply(
              `;*Commencing Specified Action* :${config.ANTILINK_ACTION}_`
            );
            return await message[config.ANTILINK_ACTION]([message.participant]);
          }
        } else {
          return await message.reply(" *I'm not am Admin*");
        }
      }
  }
);

Bixby(
  {
    pattern: "invite",
    fromMe: true,
    desc: "Provides the group's invitation link.",
    type: "group",
  },
  async (message, match) => {
    if (!message.isGroup) return await message.reply("_This command only works in group chats_")
    var admin = await isAdmin(message.jid, message.user, message.client);
    if (!admin) return await message.reply("_I'm not admin_");
    const response = await message.client.groupInviteCode(message.jid)
    await message.reply(`https://chat.whatsapp.com/${response}`)
  }
);

Bixby(
  {
    pattern: "revoke",
    fromMe: true,
    desc: "Revoke Group invite link.",
    type: "group",
  },
  async (message, match) => {
    if (!message.isGroup) return await message.reply("_This command only works in group chats_")
    var admin = await isAdmin(message.jid, message.user, message.client);
    if (!admin) return await message.reply("_I'm not admin_");
    await message.client.groupRevokeInvite(message.jid)
    await message.send("_Revoked_")
  }
);

Bixby(
  {
    pattern: "join ?(.*)",
    fromMe: true,
    desc: "Join in the group",
    type: "group",
  },
  async (message, match) => {
    var rgx = /^(https?:\/\/)?chat\.whatsapp\.com\/(?:invite\/)?([a-zA-Z0-9_-]{22})$/
    if (!match || !rgx.test(match)) return await message.reply("_Need group link_")
    var res = await message.client.groupAcceptInvite(match.split("/")[3])
    if (!res) return await message.reply("_Invalid Group Link!_")
    if (res) return await message.reply("_Joined!_")
  }
);

Bixby(
  {
    pattern: "left ?(.*)",
    fromMe: true,
    desc: "Left from the group",
    type: "group",
  },
  async (message, match) => {
    if (!message.isGroup) return await message.reply("_This command only works in group chats_")
    await message.client.groupLeave(message.jid)
  }
);

Bixby(
  {
    pattern: "lock ?(.*)",
    fromMe: true,
    desc: "only allow admins to modify the group's settings.",
    type: "group",
  },
  async (message, match) => {
    if (!message.isGroup) return await message.reply("_This command only works in group chats_")
    var admin = await isAdmin(message.jid, message.user, message.client);
    if (!admin) return await message.reply("_I'm not admin_");
    return await message.client.groupSettingUpdate(message.jid, "locked")
  }
);

Bixby(
  {
    pattern: "unlock ?(.*)",
    fromMe: true,
    desc: "allow everyone to modify the group's settings.",
    type: "group",
  },
  async (message, match) => {
    if (!message.isGroup) return await message.reply("_This command only works in group chats_")
    var admin = await isAdmin(message.jid, message.user, message.client);
    if (!admin) return await message.reply("_I'm not admin_");
    return await message.client.groupSettingUpdate(message.jid, "unlocked")
  }
);

Bixby(
  {
    pattern: "gname ?(.*)",
    fromMe: true,
    desc: "Change group subject",
    type: "group",
  },
  async (message, match) => {
    if (!message.isGroup) return await message.reply("_This command only works in group chats_")
    match = match || message.reply_message.text
    if (!match) return await message.send("_Need Subject!_\n_Example: gname New Subject!_.")
    var { restrict } = message.client.groupMetadata(message.jid);;
    if (restrict && !(await isAdmin(message.jid, message.user, message.client))) return await message.reply("_I'm not admin_");
    await message.client.groupUpdateSubject(message.jid, match)
    return await message.reply("_Subject updated_")
  }
);

Bixby(
  {
    pattern: "gdesc ?(.*)",
    fromMe: true,
    desc: "Change group description",
    type: "group",
  },
  async (message, match) => {
    if (!message.isGroup) return await message.reply("_This command only works in group chats_")
    match = match || message.reply_message.text
    if (!match) return await message.send("_Need Description!\nExample: gdesc New Description!_")
    const participants =  await message.client.groupMetadata(message.jid)
    if (participants && !(await isAdmin(message.jid, message.user, message.client))) return await message.reply("_I'm not admin_");
    await message.client.groupUpdateDescription(message.jid, match)
    return await message.reply("_Description updated_")
  }
);

Bixby(
  {
    pattern: "gpp ?(.*)",
    fromMe: true,
    desc: "Change group icon",
    type: "group",
  },
  async (message, match) => {
    if (!message.isGroup) return await message.reply("hi_This command only works in group chats_")
    var admin = await isAdmin(message.jid, message.user, message.client);
    if (!admin) return await message.reply("_I'm not admin_");
    if (message.reply_message && message.reply_message.image) {
    var img = await message.reply_message.download()
    await message.client.updateProfilePicture(message.jid, {url: img});
    return await message.reply("_Successfully Profile Picture Updated_")
    }
  } 
);

Bixby(
  {
    on: "text",
    fromMe: false,
  },
  async (message, match) => {
    if (!message.isGroup) return;
    if (config.ANTILINK)
      if (isUrl(match)) {
        await message.reply(" *Link detected❗*");
        let botadmin = await isAdmin(message.jid, message.user, message.client);
        let senderadmin = await isAdmin(
          message.jid,
          message.participant,
          message.client
        );
        if (botadmin) {
          if (!senderadmin) {
            await message.reply(
              `;*Commencing Specified Action* :${config.ANTILINK_ACTION}_`
            );
            return await message[config.ANTILINK_ACTION]([message.participant]);
          }
        } else {
          return await message.reply(" *I'm not am Admin*");
        }
      }
  }
);

Bixby(
  {
    pattern: "kickall",
    fromMe: isPublic,
    desc: "Adds a person to group",
    type: "group",
  },
  async (message, match) => {
    let { participants } = await message.client.groupMetadata(message.jid);
    let isadmin = await isAdmin(message.jid, message.user, message.client);
    if (!isadmin) return await message.reply("_I'm not admin_");

    for (let key of participants) {
      let jid = parsedJid(key.id);
      if (!(parsedJid(message.client.user.id)[0] in jid)) {
        await message.kick(jid);
        await message.reply(`@${jid[0].split("@")[0]} kicked`, {
          mentions: jid,
        });
      }
    }
  }
);
