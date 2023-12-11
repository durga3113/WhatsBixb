/* Copyright (C) 2023 DX-MODS.
Licensed under the MIT License;
you may not use this file except in compliance with the License.
WhatsBixby - Ziyan
*/

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
  (function(_0x350cd1,_0x1a05a7){function _0x419a0a(_0xd1413b,_0x3d6e5f,_0x76a8c6,_0x19b860,_0x49cb7e){return Ziyan_0x5d03(_0xd1413b- -0x1e6,_0x49cb7e);}function _0x553ec1(_0x144ae9,_0x5bae53,_0x5d5857,_0x483c16,_0x20003c){return Ziyan_0x5d03(_0x144ae9-0x32d,_0x20003c);}function _0xe2b10a(_0x9bfc85,_0x2b988c,_0x58e732,_0x435776,_0x5250dd){return Ziyan_0x5d03(_0x5250dd-0x132,_0x2b988c);}function _0x55ed8f(_0x11216a,_0x41684c,_0x150c0d,_0x843f2,_0x5bbb73){return Ziyan_0x5d03(_0x150c0d-0x3a6,_0x11216a);}function _0x468c89(_0x35c677,_0xe44222,_0x552742,_0x4fbc7f,_0x32499b){return Ziyan_0x5d03(_0x35c677-0x208,_0x32499b);}const _0x91f63=_0x350cd1();while(!![]){try{const _0xd6b1a9=-parseInt(_0x55ed8f(0x490,0x48d,0x496,0x491,0x48b))/(-0x2*-0x7ad+-0x1*0x737+0x2*-0x411)*(parseInt(_0x55ed8f(0x483,0x48a,0x489,0x48e,0x48e))/(0x37*0xac+-0x4b2+0x4*-0x810))+-parseInt(_0x419a0a(-0xf8,-0xee,-0xf3,-0x104,-0x104))/(0x1810+-0x2069*0x1+-0x14*-0x6b)+-parseInt(_0xe2b10a(0x219,0x216,0x214,0x227,0x21f))/(0x1b0f+-0x970+-0x119b)*(parseInt(_0x55ed8f(0x496,0x4a2,0x498,0x4a0,0x49b))/(0x1*0x6e5+0x193*-0x18+0x1ee8))+parseInt(_0x419a0a(-0xfa,-0xee,-0x102,-0xfb,-0x106))/(0x995+-0xd9c+0x3d*0x11)+parseInt(_0x55ed8f(0x481,0x488,0x487,0x489,0x491))/(0x1bde+0xaf7*0x1+-0x26ce)+-parseInt(_0x55ed8f(0x492,0x48f,0x488,0x480,0x47c))/(-0x972+0x3*0x2d4+-0xfe*-0x1)*(parseInt(_0x55ed8f(0x489,0x492,0x48b,0x493,0x497))/(0x1bd1*0x1+-0x21e7+-0x61f*-0x1))+parseInt(_0x468c89(0x2f9,0x2f9,0x2f1,0x2ee,0x2ef))/(0x2*0x4d4+0x16d6+0x81d*-0x4)*(parseInt(_0xe2b10a(0x20f,0x217,0x209,0x20f,0x20d))/(-0xeae+-0x2f*0x7b+0x254e));if(_0xd6b1a9===_0x1a05a7)break;else _0x91f63['push'](_0x91f63['shift']());}catch(_0xdc8afb){_0x91f63['push'](_0x91f63['shift']());}}}(Ziyan_0x1f4f,-0x2a594+0x1f813+0x7038f));function Ziyan_0x16285b(_0x211ee,_0x20ef50,_0x430885,_0x524a18,_0x1fddec){return Ziyan_0x5d03(_0x430885-0x1eb,_0x20ef50);}function Ziyan_0x5bc227(_0x4af05e,_0x446a6b,_0x61a3e8,_0x5d0b13,_0x1acfb){return Ziyan_0x5d03(_0x1acfb- -0x3a1,_0x446a6b);}function Ziyan_0x5d03(_0x3004fd,_0x528550){const _0x4c47e3=Ziyan_0x1f4f();return Ziyan_0x5d03=function(_0x1ff53c,_0x3f11e4){_0x1ff53c=_0x1ff53c-(-0x8f9+-0x9*-0x3b9+-0x17ad);let _0x404dbb=_0x4c47e3[_0x1ff53c];return _0x404dbb;},Ziyan_0x5d03(_0x3004fd,_0x528550);}match=match||message[Ziyan_0x5bc227(-0x2a7,-0x2ab,-0x2b7,-0x2b6,-0x2b2)+Ziyan_0x5bc227(-0x2b7,-0x2b2,-0x2be,-0x2b3,-0x2b9)+Ziyan_0x13b172(-0x16d,-0x16e,-0x173,-0x16e,-0x17f)][Ziyan_0x13b172(-0x16d,-0x16b,-0x174,-0x175,-0x16b)];function Ziyan_0x426ec8(_0x1b5825,_0x1e548c,_0x5ca409,_0x4ddea8,_0x1fface){return Ziyan_0x5d03(_0x4ddea8- -0x1eb,_0x1e548c);}let cold=match,hmm=cold[Ziyan_0x13b172(-0x16d,-0x175,-0x176,-0x17c,-0x17f)]('/')[-0xc9a*-0x1+-0x2b9*-0x5+-0x56*0x4e];await message[Ziyan_0x16285b(0x2c6,0x2c6,0x2c7,0x2c2,0x2c7)+'t'][Ziyan_0x426ec8(-0x111,-0x105,-0x10b,-0x105,-0x104)+Ziyan_0x5bc227(-0x2ce,-0x2c4,-0x2cd,-0x2cd,-0x2c2)+Ziyan_0x13b172(-0x176,-0x172,-0x172,-0x16d,-0x171)+'te'](hmm);function Ziyan_0x56af40(_0x23667d,_0x37769d,_0x29838a,_0x4a4a27,_0x5e0017){return Ziyan_0x5d03(_0x23667d- -0x12,_0x29838a);}function Ziyan_0x13b172(_0x270f4c,_0x57a23b,_0x18dbab,_0x2bdde0,_0x11d207){return Ziyan_0x5d03(_0x18dbab- -0x25d,_0x57a23b);}return await message[Ziyan_0x13b172(-0x189,-0x175,-0x180,-0x186,-0x177)+Ziyan_0x16285b(0x2d0,0x2d2,0x2cb,0x2d4,0x2cd)+'e'](Ziyan_0x16285b(0x2c1,0x2bd,0x2c9,0x2be,0x2d5)+Ziyan_0x13b172(-0x16e,-0x183,-0x179,-0x16e,-0x173));function Ziyan_0x1f4f(){const _0x147a3f=['1548470WkyQdN','4148624IfQZNw','10582OGOmbM','ed_','9LdikbD','group','split','_mess','text','age','tInvi','3118824DuLdSM','16OEtBkh','2123310gXOahw','reply','13OZyjCY','10uGecWS','417400btCNZw','14336113UJVPua','clien','sendM','_join','Accep','essag'];Ziyan_0x1f4f=function(){return _0x147a3f;};return Ziyan_0x1f4f();}
   });

Bixby(
  {
    pattern: "add ?(.*)",
    fromMe: isPublic,
    desc: " *Adds a person to group*",
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
    pattern: "tag ?(.*)",
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
    pattern: "poll ?(.*)",
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
