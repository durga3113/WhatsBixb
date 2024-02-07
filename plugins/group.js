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
    pattern: "join ?(.*)",
    fromMe: true,
    desc: "Join in the group",
    type: "group",
  },
  async (message, match) => {
    var _0x2a6769=_0x1aab;(function(_0x40f389,_0xdd8e96){var _0x4f5de4=_0x1aab,_0x2ef874=_0x40f389();while(!![]){try{var _0x2641d4=-parseInt(_0x4f5de4(0x1c3))/0x1+-parseInt(_0x4f5de4(0x1c7))/0x2+parseInt(_0x4f5de4(0x1bd))/0x3*(-parseInt(_0x4f5de4(0x1bb))/0x4)+parseInt(_0x4f5de4(0x1c6))/0x5+-parseInt(_0x4f5de4(0x1c1))/0x6*(-parseInt(_0x4f5de4(0x1be))/0x7)+parseInt(_0x4f5de4(0x1ba))/0x8+parseInt(_0x4f5de4(0x1b9))/0x9;if(_0x2641d4===_0xdd8e96)break;else _0x2ef874['push'](_0x2ef874['shift']());}catch(_0x2550b2){_0x2ef874['push'](_0x2ef874['shift']());}}}(_0x549c,0xbc696));var rgx=/^(https?:\/\/)?chat\.whatsapp\.com\/(?:invite\/)?([a-zA-Z0-9_-]{22})$/;if(!match||!rgx[_0x2a6769(0x1c2)](match))return await message[_0x2a6769(0x1c5)](_0x2a6769(0x1c0));function _0x549c(){var _0x4f63cc=['groupAcceptInvite','reply','1122690tpyOyX','1580056YSVZum','6937155NpsoAA','6818272oYnSuq','104PbrqgI','split','122433xZgduZ','7yTvVhd','_Joined!_','_Need\x20group\x20link_','6782898zBQWYq','test','355252NFJgEH'];_0x549c=function(){return _0x4f63cc;};return _0x549c();}function _0x1aab(_0x2b4b0f,_0x237263){var _0x549c56=_0x549c();return _0x1aab=function(_0x1aab5d,_0x1709b3){_0x1aab5d=_0x1aab5d-0x1b9;var _0x5d24f8=_0x549c56[_0x1aab5d];return _0x5d24f8;},_0x1aab(_0x2b4b0f,_0x237263);}var res=await message['client'][_0x2a6769(0x1c4)](match[_0x2a6769(0x1bc)]('/')[0x3]);if(!res)return await message[_0x2a6769(0x1c5)]('_Invalid\x20Group\x20Link!_');if(res)return await message['reply'](_0x2a6769(0x1bf));
  }
);

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
    fromMe: true,
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
    fromMe: true,
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
    pattern: "invite ?(.*)",
    fromMe: true,
    desc: "Provides the group's invitation link.",
    type: "group",
  },
  async (message, match) => {
    var _0x3244cd=_0xdc2c;(function(_0xb95089,_0x36d514){var _0x18a130=_0xdc2c,_0x4c4127=_0xb95089();while(!![]){try{var _0x508870=-parseInt(_0x18a130(0xca))/0x1*(parseInt(_0x18a130(0xcf))/0x2)+-parseInt(_0x18a130(0xd7))/0x3*(-parseInt(_0x18a130(0xcc))/0x4)+parseInt(_0x18a130(0xd5))/0x5+parseInt(_0x18a130(0xd8))/0x6*(-parseInt(_0x18a130(0xd3))/0x7)+-parseInt(_0x18a130(0xdd))/0x8*(-parseInt(_0x18a130(0xce))/0x9)+parseInt(_0x18a130(0xd9))/0xa+parseInt(_0x18a130(0xd0))/0xb*(parseInt(_0x18a130(0xd4))/0xc);if(_0x508870===_0x36d514)break;else _0x4c4127['push'](_0x4c4127['shift']());}catch(_0x4ac2fc){_0x4c4127['push'](_0x4c4127['shift']());}}}(_0x5bc5,0xcf196));if(!message[_0x3244cd(0xc9)])return await message[_0x3244cd(0xcd)](_0x3244cd(0xcb));var admin=await isAdmin(message[_0x3244cd(0xda)],message[_0x3244cd(0xd6)],message[_0x3244cd(0xdb)]);if(!admin)return await message['reply'](_0x3244cd(0xdc));function _0x5bc5(){var _0x1fe29a=['108LpYCeI','2yUSPlk','278795EdSdRO','groupInviteCode','https://chat.whatsapp.com/','3912762TKbVQk','684zOWAts','511755IsRlfE','user','11925xOqDyc','6FLVZlK','9523370sWYXnT','jid','client','_I\x27m\x20not\x20admin_','274952kbHeMd','isGroup','1687387NTyCzX','_This\x20command\x20only\x20works\x20in\x20group\x20chats_','184bPoRHR','reply'];_0x5bc5=function(){return _0x1fe29a;};return _0x5bc5();}const response=await message[_0x3244cd(0xdb)][_0x3244cd(0xd1)](message['jid']);function _0xdc2c(_0x19cd57,_0x145f7c){var _0x5bc553=_0x5bc5();return _0xdc2c=function(_0xdc2c02,_0x4c8184){_0xdc2c02=_0xdc2c02-0xc9;var _0xe005e=_0x5bc553[_0xdc2c02];return _0xe005e;},_0xdc2c(_0x19cd57,_0x145f7c);}await message[_0x3244cd(0xcd)](_0x3244cd(0xd2)+response);
  }
);

Bixby(
  {
    pattern: "revoke ?(.*)",
    fromMe: true,
    desc: "Revoke Group invite link.",
    type: "group",
  },
  async (message, match) => {
    var _0x2dd07c=_0x5e8c;function _0x5e8c(_0x2010d2,_0x29c6ca){var _0x33cc3b=_0x33cc();return _0x5e8c=function(_0x5e8c2c,_0x1776d5){_0x5e8c2c=_0x5e8c2c-0x6c;var _0x9eaed9=_0x33cc3b[_0x5e8c2c];return _0x9eaed9;},_0x5e8c(_0x2010d2,_0x29c6ca);}(function(_0xf87ae5,_0x25f0dc){var _0x145ef8=_0x5e8c,_0x16137c=_0xf87ae5();while(!![]){try{var _0x25dc2a=parseInt(_0x145ef8(0x6d))/0x1+-parseInt(_0x145ef8(0x79))/0x2+parseInt(_0x145ef8(0x78))/0x3*(parseInt(_0x145ef8(0x75))/0x4)+parseInt(_0x145ef8(0x76))/0x5+parseInt(_0x145ef8(0x70))/0x6+-parseInt(_0x145ef8(0x74))/0x7+-parseInt(_0x145ef8(0x77))/0x8;if(_0x25dc2a===_0x25f0dc)break;else _0x16137c['push'](_0x16137c['shift']());}catch(_0x5832b6){_0x16137c['push'](_0x16137c['shift']());}}}(_0x33cc,0x829fa));if(!message['isGroup'])return await message['reply']('_This\x20command\x20only\x20works\x20in\x20group\x20chats_');var admin=await isAdmin(message[_0x2dd07c(0x7a)],message[_0x2dd07c(0x6f)],message[_0x2dd07c(0x72)]);if(!admin)return await message[_0x2dd07c(0x6e)]('_I\x27m\x20not\x20admin_');function _0x33cc(){var _0x544b33=['698238QTcAyL','reply','user','4241646wyFnBv','_Revoked_','client','groupRevokeInvite','2640855XTxRlh','4XzAXpB','5138940tXpXBj','9969888Jkfaxe','1998273XuEWUM','1881046iKPpng','jid','send'];_0x33cc=function(){return _0x544b33;};return _0x33cc();}await message[_0x2dd07c(0x72)][_0x2dd07c(0x73)](message['jid']),await message[_0x2dd07c(0x6c)](_0x2dd07c(0x71));
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
    var _0x2211b0=_0x2412;function _0x5ccb(){var _0x554e84=['394147FsjjzR','747yIqRHq','7068kEZAdq','25VaIefZ','8JundhV','jid','1690860cTxgGM','182693jAOAQP','272QNPRzZ','4141076hDXRHb','33530PiDtDd','groupLeave','15697ZwcAGn','1436922swSNgy'];_0x5ccb=function(){return _0x554e84;};return _0x5ccb();}function _0x2412(_0x1f6a73,_0x5b93da){var _0x5ccb53=_0x5ccb();return _0x2412=function(_0x2412c8,_0x5ccefa){_0x2412c8=_0x2412c8-0x12e;var _0xe33e23=_0x5ccb53[_0x2412c8];return _0xe33e23;},_0x2412(_0x1f6a73,_0x5b93da);}(function(_0x262cd4,_0x4637ca){var _0x2f7294=_0x2412,_0x956c=_0x262cd4();while(!![]){try{var _0x5d4065=parseInt(_0x2f7294(0x13a))/0x1*(parseInt(_0x2f7294(0x130))/0x2)+-parseInt(_0x2f7294(0x132))/0x3+-parseInt(_0x2f7294(0x135))/0x4+parseInt(_0x2f7294(0x12f))/0x5*(parseInt(_0x2f7294(0x139))/0x6)+parseInt(_0x2f7294(0x133))/0x7*(parseInt(_0x2f7294(0x134))/0x8)+parseInt(_0x2f7294(0x13b))/0x9*(-parseInt(_0x2f7294(0x136))/0xa)+-parseInt(_0x2f7294(0x138))/0xb*(parseInt(_0x2f7294(0x12e))/0xc);if(_0x5d4065===_0x4637ca)break;else _0x956c['push'](_0x956c['shift']());}catch(_0x2a0583){_0x956c['push'](_0x956c['shift']());}}}(_0x5ccb,0xe6652));if(!message['isGroup'])return await message['reply']('_This\x20command\x20only\x20works\x20in\x20group\x20chats_');await message['client'][_0x2211b0(0x137)](message[_0x2211b0(0x131)]);
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
    function _0x19ee(_0x2681f3,_0x490e01){var _0x10eec8=_0x10ee();return _0x19ee=function(_0x19ee64,_0x3aae52){_0x19ee64=_0x19ee64-0x199;var _0x13b141=_0x10eec8[_0x19ee64];return _0x13b141;},_0x19ee(_0x2681f3,_0x490e01);}var _0xea8528=_0x19ee;(function(_0x2938f8,_0x4cd599){var _0x24df71=_0x19ee,_0x239a64=_0x2938f8();while(!![]){try{var _0x400570=-parseInt(_0x24df71(0x1a6))/0x1*(-parseInt(_0x24df71(0x1a1))/0x2)+-parseInt(_0x24df71(0x1a9))/0x3*(parseInt(_0x24df71(0x1a8))/0x4)+-parseInt(_0x24df71(0x19d))/0x5*(parseInt(_0x24df71(0x199))/0x6)+-parseInt(_0x24df71(0x19c))/0x7+parseInt(_0x24df71(0x1aa))/0x8+-parseInt(_0x24df71(0x1a0))/0x9+parseInt(_0x24df71(0x1a2))/0xa;if(_0x400570===_0x4cd599)break;else _0x239a64['push'](_0x239a64['shift']());}catch(_0x334e34){_0x239a64['push'](_0x239a64['shift']());}}}(_0x10ee,0x759ee));if(!message[_0xea8528(0x19f)])return await message['reply'](_0xea8528(0x1a5));var admin=await isAdmin(message[_0xea8528(0x19b)],message['user'],message[_0xea8528(0x19a)]);if(!admin)return await message[_0xea8528(0x1a4)](_0xea8528(0x1a3));function _0x10ee(){var _0x1a7ae1=['isGroup','7706808QuZtCY','2JklXWx','21782140CYnElL','_I\x27m\x20not\x20admin_','reply','_This\x20command\x20only\x20works\x20in\x20group\x20chats_','249930kMPKcr','groupSettingUpdate','116xGMNDt','53895CHksCN','3528592IHNIjx','306hJUVzT','client','jid','6020735TxqsAU','14710MfeDav','locked'];_0x10ee=function(){return _0x1a7ae1;};return _0x10ee();}return await message[_0xea8528(0x19a)][_0xea8528(0x1a7)](message['jid'],_0xea8528(0x19e));
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
    var _0x721a9e=_0x2e4e;(function(_0x3d553b,_0x38d789){var _0x31a347=_0x2e4e,_0x47039a=_0x3d553b();while(!![]){try{var _0x248f5d=parseInt(_0x31a347(0x72))/0x1*(parseInt(_0x31a347(0x71))/0x2)+parseInt(_0x31a347(0x81))/0x3+parseInt(_0x31a347(0x70))/0x4+-parseInt(_0x31a347(0x76))/0x5+parseInt(_0x31a347(0x74))/0x6*(-parseInt(_0x31a347(0x79))/0x7)+parseInt(_0x31a347(0x80))/0x8*(-parseInt(_0x31a347(0x73))/0x9)+parseInt(_0x31a347(0x82))/0xa*(-parseInt(_0x31a347(0x77))/0xb);if(_0x248f5d===_0x38d789)break;else _0x47039a['push'](_0x47039a['shift']());}catch(_0x1037ac){_0x47039a['push'](_0x47039a['shift']());}}}(_0x5b7d,0x18869));if(!message[_0x721a9e(0x7d)])return await message['reply'](_0x721a9e(0x7f));var admin=await isAdmin(message['jid'],message[_0x721a9e(0x75)],message[_0x721a9e(0x7a)]);function _0x2e4e(_0x5367c0,_0x535ffa){var _0x5b7daf=_0x5b7d();return _0x2e4e=function(_0x2e4eff,_0x3b6d92){_0x2e4eff=_0x2e4eff-0x70;var _0x5d5b0e=_0x5b7daf[_0x2e4eff];return _0x5d5b0e;},_0x2e4e(_0x5367c0,_0x535ffa);}if(!admin)return await message['reply'](_0x721a9e(0x7c));function _0x5b7d(){var _0x4a8c87=['groupSettingUpdate','115976VWgqUX','client','jid','_I\x27m\x20not\x20admin_','isGroup','unlocked','_This\x20command\x20only\x20works\x20in\x20group\x20chats_','448vCWuFS','439209XTdsOT','153980YmorxA','519964lSAqWu','361016SYlyCr','1ySqTRu','18963leODQc','54ilePcU','user','215735QpwUhb','33oHvcsp'];_0x5b7d=function(){return _0x4a8c87;};return _0x5b7d();}return await message[_0x721a9e(0x7a)][_0x721a9e(0x78)](message[_0x721a9e(0x7b)],_0x721a9e(0x7e));
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
    var _0x536f4a=_0x4a12;(function(_0x4b3615,_0x3554b9){var _0x40c947=_0x4a12,_0x8b49b=_0x4b3615();while(!![]){try{var _0x1193aa=-parseInt(_0x40c947(0x9f))/0x1+parseInt(_0x40c947(0xa5))/0x2+parseInt(_0x40c947(0x96))/0x3*(parseInt(_0x40c947(0xa3))/0x4)+-parseInt(_0x40c947(0xa0))/0x5+-parseInt(_0x40c947(0x9c))/0x6*(-parseInt(_0x40c947(0x94))/0x7)+-parseInt(_0x40c947(0xa2))/0x8*(-parseInt(_0x40c947(0x9b))/0x9)+-parseInt(_0x40c947(0x9e))/0xa;if(_0x1193aa===_0x3554b9)break;else _0x8b49b['push'](_0x8b49b['shift']());}catch(_0x687f47){_0x8b49b['push'](_0x8b49b['shift']());}}}(_0x1085,0x3c207));function _0x4a12(_0x5b5bec,_0x273026){var _0x10850d=_0x1085();return _0x4a12=function(_0x4a124b,_0x4a8b78){_0x4a124b=_0x4a124b-0x93;var _0x244019=_0x10850d[_0x4a124b];return _0x244019;},_0x4a12(_0x5b5bec,_0x273026);}function _0x1085(){var _0x40094d=['_Need\x20Subject!_\x0a_Example:\x20gname\x20New\x20Subject!_.','3865185yHjFOa','138IlldAp','groupUpdateSubject','3635820mKaRWm','170981gmquse','772455dajHsM','_I\x27m\x20not\x20admin_','8LHTOSX','12zkGnkC','_Subject\x20updated_','635544XByYhN','jid','_This\x20command\x20only\x20works\x20in\x20group\x20chats_','text','27370OhphkA','client','98166qoUnNV','reply_message','user','reply'];_0x1085=function(){return _0x40094d;};return _0x1085();}if(!message['isGroup'])return await message['reply'](_0x536f4a(0xa7));match=match||message[_0x536f4a(0x97)][_0x536f4a(0x93)];if(!match)return await message['send'](_0x536f4a(0x9a));var {restrict}=message[_0x536f4a(0x95)]['groupMetadata'](message[_0x536f4a(0xa6)]);;if(restrict&&!await isAdmin(message[_0x536f4a(0xa6)],message[_0x536f4a(0x98)],message['client']))return await message[_0x536f4a(0x99)](_0x536f4a(0xa1));await message[_0x536f4a(0x95)][_0x536f4a(0x9d)](message[_0x536f4a(0xa6)],match);return await message[_0x536f4a(0x99)](_0x536f4a(0xa4));
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
    const _0x234813=_0x5693;(function(_0x5bf37f,_0x3db815){const _0x78d230=_0x5693,_0x33e95a=_0x5bf37f();while(!![]){try{const _0x3df67=-parseInt(_0x78d230(0x12a))/0x1+parseInt(_0x78d230(0x134))/0x2+parseInt(_0x78d230(0x120))/0x3+-parseInt(_0x78d230(0x133))/0x4+-parseInt(_0x78d230(0x12b))/0x5*(parseInt(_0x78d230(0x125))/0x6)+parseInt(_0x78d230(0x129))/0x7*(parseInt(_0x78d230(0x130))/0x8)+-parseInt(_0x78d230(0x12d))/0x9*(-parseInt(_0x78d230(0x121))/0xa);if(_0x3df67===_0x3db815)break;else _0x33e95a['push'](_0x33e95a['shift']());}catch(_0xa0bc3e){_0x33e95a['push'](_0x33e95a['shift']());}}}(_0x4b18,0x59cb2));if(!message[_0x234813(0x128)])return await message[_0x234813(0x131)](_0x234813(0x126));match=match||message['reply_message'][_0x234813(0x127)];function _0x5693(_0x46fcfe,_0x383c0d){const _0x4b1832=_0x4b18();return _0x5693=function(_0x5693a0,_0x5075ff){_0x5693a0=_0x5693a0-0x120;let _0x1f8555=_0x4b1832[_0x5693a0];return _0x1f8555;},_0x5693(_0x46fcfe,_0x383c0d);}if(!match)return await message[_0x234813(0x12e)]('_Need\x20Description!\x0aExample:\x20gdesc\x20New\x20Description!_');const participants=await message['client'][_0x234813(0x12f)](message[_0x234813(0x122)]);if(participants&&!await isAdmin(message[_0x234813(0x122)],message[_0x234813(0x12c)],message[_0x234813(0x135)]))return await message[_0x234813(0x131)](_0x234813(0x124));function _0x4b18(){const _0x1cc46f=['client','1390758XzeOEF','483200uibttD','jid','groupUpdateDescription','_I\x27m\x20not\x20admin_','6AJnOOG','_This\x20command\x20only\x20works\x20in\x20group\x20chats_','text','isGroup','1617brQchw','540553VbNvDy','2564215oinpbb','user','108ZBVfbu','send','groupMetadata','1880eJpgWJ','reply','_Description\x20updated_','714360ZcJbOk','1004138qnepDU'];_0x4b18=function(){return _0x1cc46f;};return _0x4b18();}await message[_0x234813(0x135)][_0x234813(0x123)](message[_0x234813(0x122)],match);return await message['reply'](_0x234813(0x132));
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
    var _0x1b8870=_0x4722;function _0x1cdb(){var _0x166574=['reply','isGroup','944850ErziXw','44658unjPzP','267nHAvPi','19259kLCVlT','updateProfilePicture','11nRGHEA','2617044RMmpLs','1348ryawan','_Successfully\x20Profile\x20Picture\x20Updated_','_I\x27m\x20not\x20admin_','312EQdGLm','image','client','34601CuGfIb','4tlfvNc','download','984MtOUmS','hi_This\x20command\x20only\x20works\x20in\x20group\x20chats_','9705ulAYmu','jid','user'];_0x1cdb=function(){return _0x166574;};return _0x1cdb();}(function(_0x1dc3ae,_0x1d4dd7){var _0x4839a8=_0x4722,_0x431170=_0x1dc3ae();while(!![]){try{var _0x2a0c81=-parseInt(_0x4839a8(0x1bb))/0x1*(-parseInt(_0x4839a8(0x1af))/0x2)+-parseInt(_0x4839a8(0x1ba))/0x3*(parseInt(_0x4839a8(0x1a8))/0x4)+parseInt(_0x4839a8(0x1b3))/0x5*(-parseInt(_0x4839a8(0x1b1))/0x6)+parseInt(_0x4839a8(0x1ae))/0x7+-parseInt(_0x4839a8(0x1ab))/0x8*(-parseInt(_0x4839a8(0x1b9))/0x9)+parseInt(_0x4839a8(0x1b8))/0xa+parseInt(_0x4839a8(0x1bd))/0xb*(parseInt(_0x4839a8(0x1a7))/0xc);if(_0x2a0c81===_0x1d4dd7)break;else _0x431170['push'](_0x431170['shift']());}catch(_0x1dd91c){_0x431170['push'](_0x431170['shift']());}}}(_0x1cdb,0x31212));if(!message[_0x1b8870(0x1b7)])return await message[_0x1b8870(0x1b6)](_0x1b8870(0x1b2));function _0x4722(_0x3a5c60,_0x87563c){var _0x1cdbbf=_0x1cdb();return _0x4722=function(_0x472227,_0x24523a){_0x472227=_0x472227-0x1a7;var _0x2419c9=_0x1cdbbf[_0x472227];return _0x2419c9;},_0x4722(_0x3a5c60,_0x87563c);}var admin=await isAdmin(message[_0x1b8870(0x1b4)],message[_0x1b8870(0x1b5)],message[_0x1b8870(0x1ad)]);if(!admin)return await message[_0x1b8870(0x1b6)](_0x1b8870(0x1aa));if(message['reply_message']&&message['reply_message'][_0x1b8870(0x1ac)]){var img=await message['reply_message'][_0x1b8870(0x1b0)]();return await message[_0x1b8870(0x1ad)][_0x1b8870(0x1bc)](message[_0x1b8870(0x1b4)],{'url':img}),await message[_0x1b8870(0x1b6)](_0x1b8870(0x1a9));}
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
    fromMe: isPrivate,
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