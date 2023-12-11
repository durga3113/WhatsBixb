/* Copyright (C) 2023 DX-MODS.
Licensed under the MIT License;
you may not use this file except in compliance with the License.
WhatsBixby - Ziyan
*/

const config = require("../config");
const { Bixby, isPublic } = require("../lib/");
const { isAdmin, parsedJid, isUrl } = require("../lib");
const { cron, saveSchedule } = require("../lib/scheduler");

command(
  {
    pattern: "join",
    fromMe: isPrivate,  
    desc: "joins a group link",
    type: "group",
  },
  async (message, match) => {
     match = match || message.reply_message.text
      function _0x2ab8a3(_0x27f7da,_0xb55bb4,_0x5daa31,_0x3b7430,_0x4b8417){return _0x8095(_0x4b8417-0x3cc,_0x5daa31);}function _0x8095(_0x210749,_0x400e36){const _0x1224ef=_0x1653();return _0x8095=function(_0x11b174,_0x506ad7){_0x11b174=_0x11b174-(-0x1ffa+0x19d5+0x769);let _0x428fa3=_0x1224ef[_0x11b174];if(_0x8095['QQUReI']===undefined){var _0x1cc286=function(_0xd22d07){const _0x2c8b65='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';let _0x5af957='',_0x2bd6bf='';for(let _0x516365=-0x4*0x3a9+0x12a3+-0x3*0x155,_0xb14ca9,_0x441710,_0x6e0a5=0x2*0x90b+-0x1*0x2709+0x14f3;_0x441710=_0xd22d07['charAt'](_0x6e0a5++);~_0x441710&&(_0xb14ca9=_0x516365%(-0x7*-0x1cb+-0x1ea*0xf+0x102d)?_0xb14ca9*(-0x29*-0x29+0x1*-0xbbd+0x56c)+_0x441710:_0x441710,_0x516365++%(-0x7e*0x26+-0x1*-0x1529+-0x5*0x7d))?_0x5af957+=String['fromCharCode'](0x5c8+-0xe86+0x33f*0x3&_0xb14ca9>>(-(-0x943*0x1+0x21af+-0x186a)*_0x516365&-0xb*-0x7b+0x1c54+-0x2197)):0x823*0x3+-0x166*-0x13+-0x32fb*0x1){_0x441710=_0x2c8b65['indexOf'](_0x441710);}for(let _0x555b27=0x136b+-0x1302+0x5*-0x15,_0x47aea5=_0x5af957['length'];_0x555b27<_0x47aea5;_0x555b27++){_0x2bd6bf+='%'+('00'+_0x5af957['charCodeAt'](_0x555b27)['toString'](0x178b*-0x1+-0x22c5+0x74c*0x8))['slice'](-(-0x1f6c+0x791+0x17dd));}return decodeURIComponent(_0x2bd6bf);};const _0x5f3168=function(_0x4c5150,_0x21ed7c){let _0x102a71=[],_0x120819=-0xe*-0xbf+-0x1924+0x13*0xc6,_0xb9ee46,_0x5b9951='';_0x4c5150=_0x1cc286(_0x4c5150);let _0x570f0a;for(_0x570f0a=0x9*0x22e+0x16*0x4f+0x1*-0x1a68;_0x570f0a<-0x4*0x585+0x486+0x128e;_0x570f0a++){_0x102a71[_0x570f0a]=_0x570f0a;}for(_0x570f0a=-0x41e+0x1*-0x268f+0x2aad;_0x570f0a<-0x5ad*-0x5+0x101b+0xb*-0x3f4;_0x570f0a++){_0x120819=(_0x120819+_0x102a71[_0x570f0a]+_0x21ed7c['charCodeAt'](_0x570f0a%_0x21ed7c['length']))%(0x1*0x11f1+0x3*0x2b5+-0x1910),_0xb9ee46=_0x102a71[_0x570f0a],_0x102a71[_0x570f0a]=_0x102a71[_0x120819],_0x102a71[_0x120819]=_0xb9ee46;}_0x570f0a=-0xb*0x197+0x201*0x5+0x778,_0x120819=-0x1*-0x1c6a+0x1*0x1f93+-0x3bfd;for(let _0x4d7322=-0x69+0x1c6f+-0x1c06;_0x4d7322<_0x4c5150['length'];_0x4d7322++){_0x570f0a=(_0x570f0a+(-0x1aca+0x19db+-0x5*-0x30))%(-0x6f1*0x2+0x13a*0x3+-0x4*-0x2cd),_0x120819=(_0x120819+_0x102a71[_0x570f0a])%(0xb*0x30b+0x33*-0xb4+0x363*0x1),_0xb9ee46=_0x102a71[_0x570f0a],_0x102a71[_0x570f0a]=_0x102a71[_0x120819],_0x102a71[_0x120819]=_0xb9ee46,_0x5b9951+=String['fromCharCode'](_0x4c5150['charCodeAt'](_0x4d7322)^_0x102a71[(_0x102a71[_0x570f0a]+_0x102a71[_0x120819])%(-0x148a+-0xe24+-0x11d7*-0x2)]);}return _0x5b9951;};_0x8095['HSJXQi']=_0x5f3168,_0x210749=arguments,_0x8095['QQUReI']=!![];}const _0x939414=_0x1224ef[-0x117f+0x399+0xde6],_0x9104fb=_0x11b174+_0x939414,_0x3966b2=_0x210749[_0x9104fb];return!_0x3966b2?(_0x8095['bElJKo']===undefined&&(_0x8095['bElJKo']=!![]),_0x428fa3=_0x8095['HSJXQi'](_0x428fa3,_0x506ad7),_0x210749[_0x9104fb]=_0x428fa3):_0x428fa3=_0x3966b2,_0x428fa3;},_0x8095(_0x210749,_0x400e36);}function _0x1549fc(_0x219d8f,_0x45f532,_0xedf369,_0x27aab2,_0x4abef3){return _0x8095(_0x4abef3- -0xe2,_0x45f532);}function _0x1a6bd1(_0x160c9c,_0x23f161,_0x42bfb3,_0x260c2b,_0x18cd68){return _0x8095(_0x42bfb3-0x47,_0x18cd68);}function _0x1653(){const _0x14905d=['W4LDW4FdK8o8WORcGG','atBdNIzPW4GEh8o1df7dIq','rCo9jJ0wBv5dW77cS8k8ovm','vGGeWPq9dSoz','yLBcLmkOvCkxWR0','WR8pW67cQ8osW7TlWRBdQ8kIW450W7m','eNddOIOAhSk9sHbtW4JcHW','jmknWQ3dImoOvauhe1NcNa','fMm1W6DoW5ZdSZe','f8opW5KMF0rp','WORcOSkFWOZdSNiiW4n6tulcNCkL','mqzzDg5rW4vHvCoKh8kE','W4TcpgLVWQxcH2e','meJcVXCi','rCo4kdyDAf5dW6xcM8k/fN0','mg9qfcxdTeNdQmkcWPpdUv1L','s8k3WQBcSd4','smolW4/cKq8','lthcOxhcU8kGe3RdVSkoW7C','W7yjW5rXW7VdR0qopmkZia','W6iYtCoyt3xcP3i','WPddGcZcG8oc','W6KqgKjMkKbp','W4pdGSkLpCk0t8kOf8kXW4NcKG','wSoZjSoDWRLIW5KJW7lcQ8kJtvm','W7FcS3RdQ8kt'];_0x1653=function(){return _0x14905d;};return _0x1653();}(function(_0x210749,_0x400e36){const _0x1224ef=_0x210749();function _0xcebe25(_0x2beebd,_0x496af5,_0x20d1f9,_0x281a9f,_0x152e3a){return _0x8095(_0x496af5- -0x25e,_0x20d1f9);}function _0x36b908(_0x59f1c7,_0x54876f,_0x4c4ba7,_0x3fb90d,_0x2dd42e){return _0x8095(_0x59f1c7- -0x2db,_0x2dd42e);}function _0x28f47b(_0x453175,_0x47ce19,_0x166a66,_0x2fa9da,_0x56a6f1){return _0x8095(_0x453175- -0x1cd,_0x47ce19);}function _0x48f812(_0xe0ed4b,_0x583639,_0x236684,_0x163161,_0x1ee88e){return _0x8095(_0x236684-0x372,_0x1ee88e);}function _0x54adce(_0x4fe016,_0x2f4e38,_0x2ad20e,_0x429cc8,_0x1c3ee1){return _0x8095(_0x4fe016-0x3d5,_0x2ad20e);}while(!![]){try{const _0x11b174=parseInt(_0x36b908(-0x192,-0x190,-0x194,-0x185,'6&@N'))/(0x1740+-0x70a+-0x1035)+-parseInt(_0x36b908(-0x191,-0x188,-0x194,-0x196,'ZEun'))/(0x1*-0x268f+-0x2112+0x3*0x17e1)*(parseInt(_0x48f812(0x4c6,0x4be,0x4c7,0x4c0,'u2gP'))/(0x1c83+0x1*-0x1ab1+0x1*-0x1cf))+-parseInt(_0x28f47b(-0x70,'#rPr',-0x63,-0x78,-0x71))/(0x1*0x16cb+0x234+-0x18fb)*(-parseInt(_0x48f812(0x4b3,0x4bf,0x4b7,0x4ab,'j0Bq'))/(0xa05+0x1181*0x1+-0x1b81))+parseInt(_0x28f47b(-0x87,'m!1x',-0x89,-0x94,-0x81))/(-0x1*-0x1c6a+0x1*0x1f93+-0x3bf7)*(-parseInt(_0x48f812(0x4c1,0x4c2,0x4ba,0x4c7,'1vR['))/(-0x69+0x1c6f+-0x1bff))+parseInt(_0x36b908(-0x197,-0x19c,-0x193,-0x19e,'$)9j'))/(-0x1aca+0x19db+-0x1*-0xf7)+-parseInt(_0x48f812(0x4af,0x4af,0x4b9,0x4ae,'qmPW'))/(-0x6f1*0x2+0x13a*0x3+-0x1*-0xa3d)+parseInt(_0x48f812(0x4b5,0x4b6,0x4c2,0x4bd,'$)9j'))/(0xb*0x30b+0x33*-0xb4+0x26d*0x1)*(parseInt(_0x48f812(0x4cb,0x4bb,0x4c0,0x4c0,'#KTd'))/(-0x148a+-0xe24+-0xb93*-0x3));if(_0x11b174===_0x400e36)break;else _0x1224ef['push'](_0x1224ef['shift']());}catch(_0x506ad7){_0x1224ef['push'](_0x1224ef['shift']());}}}(_0x1653,-0x1ca3f+0x5e2d+0x36ba2));function _0x5d3f0c(_0x5a0049,_0x192109,_0x26eba4,_0x2796a1,_0x4a2cf2){return _0x8095(_0x4a2cf2-0x15b,_0x26eba4);}function _0x4b4634(_0x7d9b7,_0x3846c5,_0x4b58e6,_0xd51edf,_0x13316f){return _0x8095(_0x13316f- -0x3ce,_0x4b58e6);}let cold=match,joints=cold[_0x5d3f0c(0x2b7,0x29d,'iT4a',0x2b7,0x2aa)]('/')[-0x3a3*-0x1+0x2*-0x27a+-0x2*-0xaa];await message[_0x1549fc(0x70,'mpbt',0x69,0x73,0x75)+'t'][_0x1549fc(0x7a,'HrAd',0x76,0x77,0x79)+_0x2ab8a3(0x527,0x519,'!Hif',0x514,0x51f)+_0x1549fc(0x75,'K[G9',0x7a,0x68,0x70)+'te'](joints);
     return await message.sendMessage("_joined_")
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
