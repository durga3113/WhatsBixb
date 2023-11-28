const { isPrivate, Bixby, getBuffer } = require("../lib");
const ll = "*Type something*";

/* Copyright (C) 2022 X-Electra.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
X-Asena - X-Electra
*/

Bixby(
  {
    pattern: "trollmaker",
    fromMe: isPrivate,
    desc: "you can make your own trolls by this tool",
    type: "tool",
  },
  async (message, match) => {
    return await message.sendMessage(
      `╭────────────────╮
               *ᴛʀᴏʟʟ ᴘᴀᴄᴋ*
╰────────────────╯
               *ᴄᴏᴍᴍᴀɴᴅs*

❏ ᴅᴏɢɢʏ ᴘᴀᴄᴋ
╭────────────────
│ ▢ ᴀsᴋᴅᴏɢ
│ ▢ ʜᴀᴘᴘʏᴅᴏɢ
│ ▢ ᴄᴏᴅᴇᴅᴏɢ
│ ▢ ʟᴏᴠᴇᴅᴏɢ
│ ▢ ɢᴜɴᴅᴏɢ
│ ▢ ᴀɴɢʀʏᴅᴏɢ
│ ▢ sᴇᴅᴅᴏɢ
│ ▢ ᴛʜᴜɢᴅᴏɢ
╰────────────────

❏ ᴄᴀᴛ ᴘᴀᴄᴋ

╭────────────────
│   ❏ ᴄᴀᴛ  sᴇᴅ
│   
│ ▢ ᴀsᴇᴅᴄᴀᴛ
│ ▢ ʙsᴇᴅᴄᴀᴛ
│ ▢ ᴄsᴇᴅᴄᴀᴛ
│ ▢ ᴅsᴇᴅᴄᴀᴛ
│ ▢ ᴇsᴇᴅᴄᴀᴛ
│ ▢ ғsᴇᴅᴄᴀᴛ
╰────────────────

╭────────────────
│   ❏ ᴄᴀᴛ  ʟᴏᴠᴇ
│   
│ ▢ ᴀʟᴏᴠᴇᴄᴀᴛ
│ ▢ ʙʟᴏᴠᴇᴄᴀᴛ
│ ▢ ᴄʟᴏᴠᴇᴄᴀᴛ
│ ▢ ᴅʟᴏᴠᴇᴄᴀᴛ
│ ▢ ᴇʟᴏᴠᴇᴄᴀᴛ
│ ▢ ғʟᴏᴠᴇᴄᴀᴛ
╰────────────────

╭────────────────
│   ❏ ᴄᴀᴛ  ᴀɴɢʀʏ
│   
│ ▢ ᴀᴀɴɢʀʏᴄᴀᴛ
│ ▢ ʙᴀɴɢʀʏᴄᴀᴛ
│ ▢ ᴄᴀɴɢʀʏᴄᴀᴛ
│ ▢ ᴅᴀɴɢʀʏᴄᴀᴛ
│ ▢ ᴇᴀɴɢʀʏᴄᴀᴛ
│ ▢ ғᴀɴɢʀʏᴄᴀᴛ
╰────────────────

╭────────────────
│   ❏ ᴄᴀᴛ  ᴀɴɢʀʏ
│   
│ ▢ ᴀᴄᴜᴛᴇᴄᴀᴛ
│ ▢ ʙᴄᴜᴛᴇᴄᴀᴛ
│ ▢ ᴄᴄᴜᴛᴇᴄᴀᴛ
│ ▢ ᴅᴄᴜᴛᴇᴄᴀᴛ
│ ▢ ᴇᴄᴜᴛᴇᴄᴀᴛ
│ ▢ ғᴄᴜᴛᴇᴄᴀᴛ
╰────────────────

╭────────────────
│  ❏ ᴍɪsᴄᴇʟʟᴀɴᴏᴜs 
│   
│ ▢ ᴏʀɢsᴍ
╰────────────────`
    );
  }
);

/* Copyright (C) 2022 X-Electra.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
X-Asena - X-Electra
*/

Bixby(
  {
    pattern: "doggy",
    fromMe: isPrivate,
    dontAddBixbyList: false,
    type: "Maker menu",
  },
  async (message, match) => {
    if (match === "" || !match.split(";")[0] || !match.split(";")[1])
      return await message.sendMessage(
        "*ᴇxᴀᴍᴘʟᴇ \n╭──────────────── \n│  ᴅᴏɢɢʏ ᴛʀᴏʟʟ;ᴘᴀᴄᴋ \n│   ▢ ᴛʀᴏʟʟ=ᴛᴏᴘ \n│   ▢ ᴘᴀᴄᴋ=ʙᴏᴛᴛᴏᴍ \n╰────────────────╯"
      );

    const buffer = await getBuffer(
      `https://docs-jojo.herokuapp.com/api/meme-gen?top=${
        match.split(";")[0]
      }&bottom=${
        match.split(";")[1]
      }&img=https://static.wikia.nocookie.net/dogelore/images/9/97/Doge.jpg/revision/latest/top-crop/width/360/height/450?cb=20190205113053`
    );
    return await message.sendMessage(buffer, {}, "image");
  }
);

/* Copyright (C) 2022 X-Electra.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
X-Asena - X-Electra
*/

Bixby(
  {
    pattern: "askdog",
    fromMe: isPrivate,
    dontAddBixbyList: false,
    type: "Maker menu",
  },
  async (message, match) => {
    if (match === "" || !match.split(";")[0] || !match.split(";")[1])
      return await message.sendMessage(
        "*ᴇxᴀᴍᴘʟᴇ \n╭──────────────── \n│  ᴅᴏɢɢʏ ᴛʀᴏʟʟ;ᴘᴀᴄᴋ \n│   ▢ ᴛʀᴏʟʟ=ᴛᴏᴘ \n│   ▢ ᴘᴀᴄᴋ=ʙᴏᴛᴛᴏᴍ \n╰────────────────╯"
      );

    const buffer = await getBuffer(
      `https://docs-jojo.herokuapp.com/api/meme-gen?top=${
        match.split(";")[0]
      }&bottom=%20&img=https://i.imgur.com/o07ESQe.jpeg`
    );
    return await message.sendMessage(buffer, {}, "image");
  }
);

/* Copyright (C) 2022 X-Electra.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
X-Asena - X-Electra
*/

Bixby(
  {
    pattern: "happydog",
    fromMe: isPrivate,
    dontAddBixbyList: false,
    type: "Maker menu",
  },
  async (message, match) => {
    const buffer = await getBuffer(
      `https://docs-jojo.herokuapp.com/api/meme-gen?top=${
        match.split(";")[0]
      }&bottom=%20&img=https://i.imgur.com/GYQZS92.jpeg`
    );
    return await message.sendMessage(buffer, {}, "image");
  }
);

/* Copyright (C) 2022 X-Electra.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
X-Asena - X-Electra
*/

Bixby(
  {
    pattern: "codedog",
    fromMe: isPrivate,
    dontAddBixbyList: false,
    type: "Maker menu",
  },
  async (message, match) => {
    const buffer = await getBuffer(
      `https://docs-jojo.herokuapp.com/api/meme-gen?top=${
        match.split(";")[0]
      }&bottom=%20&img=https://i.imgur.com/sXP02k8.jpeg`
    );
    return await message.sendMessage(buffer, {}, "image");
  }
);

/* Copyright (C) 2022 X-Electra.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
X-Asena - X-Electra
*/

Bixby(
  {
    pattern: "lovedog",
    fromMe: isPrivate,
    dontAddBixbyList: false,
    type: "Maker menu",
  },
  async (message, match) => {
    if (match === "" || !match.split(";")[0] || !match.split(";")[1])
      return await message.sendMessage(
        "*ᴇxᴀᴍᴘʟᴇ \n╭──────────────── \n│  ᴅᴏɢɢʏ ᴛʀᴏʟʟ;ᴘᴀᴄᴋ \n│   ▢ ᴛʀᴏʟʟ=ᴛᴏᴘ \n│   ▢ ᴘᴀᴄᴋ=ʙᴏᴛᴛᴏᴍ \n╰────────────────╯"
      );

    const buffer = await getBuffer(
      `https://docs-jojo.herokuapp.com/api/meme-gen?top=${
        match.split(";")[0]
      }&bottom=${match.split(";")[1]}&img=https://i.imgur.com/XMFjEB1.jpeg`
    );
    return await message.sendMessage(buffer, {}, "image");
  }
);

/* Copyright (C) 2022 X-Electra.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
X-Asena - X-Electra
*/

Bixby(
  {
    pattern: "gundog",
    fromMe: isPrivate,
    dontAddBixbyList: false,
    type: "Maker menu",
  },
  async (message, match) => {
    if (match === "" || !match.split(";")[0] || !match.split(";")[1])
      return await message.sendMessage(
        "*ᴇxᴀᴍᴘʟᴇ \n╭──────────────── \n│  ᴅᴏɢɢʏ ᴛʀᴏʟʟ;ᴘᴀᴄᴋ \n│   ▢ ᴛʀᴏʟʟ=ᴛᴏᴘ \n│   ▢ ᴘᴀᴄᴋ=ʙᴏᴛᴛᴏᴍ \n╰────────────────╯"
      );

    const buffer = await getBuffer(
      `https://docs-jojo.herokuapp.com/api/meme-gen?top=${
        match.split(";")[0]
      }&bottom=${match.split(";")[1]}&img=https://i.imgur.com/oRN3wdZ.jpeg`
    );
    return await message.sendMessage(buffer, {}, "image");
  }
);

/* Copyright (C) 2022 X-Electra.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
X-Asena - X-Electra
*/

Bixby(
  {
    pattern: "angrydog",
    fromMe: isPrivate,
    dontAddBixbyList: false,
    type: "Maker menu",
  },
  async (message, match) => {
    if (match === "" || !match.split(";")[0] || !match.split(";")[1])
      return await message.sendMessage(
        "*ᴇxᴀᴍᴘʟᴇ \n╭──────────────── \n│  ᴅᴏɢɢʏ ᴛʀᴏʟʟ;ᴘᴀᴄᴋ \n│   ▢ ᴛʀᴏʟʟ=ᴛᴏᴘ \n│   ▢ ᴘᴀᴄᴋ=ʙᴏᴛᴛᴏᴍ \n╰────────────────╯"
      );

    const buffer = await getBuffer(
      `https://docs-jojo.herokuapp.com/api/meme-gen?top=${
        match.split(";")[0]
      }&bottom=${match.split(";")[1]}&img=https://i.imgur.com/4NnqLBo.jpeg`
    );
    return await message.sendMessage(buffer, {}, "image");
  }
);

/* Copyright (C) 2022 X-Electra.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
X-Asena - X-Electra
*/

Bixby(
  {
    pattern: "seddog",
    fromMe: isPrivate,
    dontAddBixbyList: false,
    type: "Maker menu",
  },
  async (message, match) => {
    if (match === "" || !match.split(";")[0] || !match.split(";")[1])
      return await message.sendMessage(
        "*ᴇxᴀᴍᴘʟᴇ \n╭──────────────── \n│  ᴅᴏɢɢʏ ᴛʀᴏʟʟ;ᴘᴀᴄᴋ \n│   ▢ ᴛʀᴏʟʟ=ᴛᴏᴘ \n│   ▢ ᴘᴀᴄᴋ=ʙᴏᴛᴛᴏᴍ \n╰────────────────╯"
      );

    const buffer = await getBuffer(
      `https://docs-jojo.herokuapp.com/api/meme-gen?top=${
        match.split(";")[0]
      }&bottom=${match.split(";")[1]}&img=https://i.imgur.com/IobC083.jpeg`
    );
    return await message.sendMessage(buffer, {}, "image");
  }
);

/* Copyright (C) 2022 X-Electra.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
X-Asena - X-Electra
*/

Bixby(
  {
    pattern: "thugdog",
    fromMe: isPrivate,
    dontAddBixbyList: false,
    type: "Maker menu",
  },
  async (message, match) => {
    if (match === "" || !match.split(";")[0] || !match.split(";")[1])
      return await message.sendMessage(
        "*ᴇxᴀᴍᴘʟᴇ \n╭──────────────── \n│  ᴅᴏɢɢʏ ᴛʀᴏʟʟ;ᴘᴀᴄᴋ \n│   ▢ ᴛʀᴏʟʟ=ᴛᴏᴘ \n│   ▢ ᴘᴀᴄᴋ=ʙᴏᴛᴛᴏᴍ \n╰────────────────╯"
      );

    const buffer = await getBuffer(
      `https://docs-jojo.herokuapp.com/api/meme-gen?top=${
        match.split(";")[0]
      }&bottom=${match.split(";")[1]}&img=https://i.imgur.com/nm8ce0C.jpeg`
    );
    return await message.sendMessage(buffer, {}, "image");
  }
);

// cat camands below

/* Copyright (C) 2022 X-Electra.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
X-Asena - X-Electra
*/

Bixby(
  {
    pattern: "asedcat",
    fromMe: isPrivate,
    dontAddBixbyList: false,
    type: "Maker menu",
  },
  async (message, match) => {
    const buffer = await getBuffer(
      `https://docs-jojo.herokuapp.com/api/meme-gen?top=${
        match.split(";")[0]
      }&bottom=%20&img=https://i.imgur.com/gXp8b7o.jpeg`
    );
    return await message.sendMessage(buffer, {}, "image");
  }
);

/* Copyright (C) 2022 X-Electra.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
X-Asena - X-Electra
*/

Bixby(
  {
    pattern: "bsedcat?(.*)",
    fromMe: isPrivate,
    dontAddBixbyList: false,
    type: "Maker menu",
  },
  async (message, match) => {
    const buffer = await getBuffer(
      `https://docs-jojo.herokuapp.com/api/meme-gen?top=${
        match.split(";")[0]
      }&bottom=%20&img=https://i.imgur.com/TpArZur.jpeg`
    );
    return await message.sendMessage(buffer, {}, "image");
  }
);

/* Copyright (C) 2022 X-Electra.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
X-Asena - X-Electra
*/

Bixby(
  {
    pattern: "csedcat?(.*)",
    fromMe: isPrivate,
    dontAddBixbyList: false,
    type: "Maker menu",
  },
  async (message, match) => {
    const buffer = await getBuffer(
      `https://docs-jojo.herokuapp.com/api/meme-gen?top=${
        match.split(";")[0]
      }&bottom=%20&img=https://i.imgur.com/4Xo3beO.jpeg`
    );
    return await message.sendMessage(buffer, {}, "image");
  }
);

/* Copyright (C) 2022 X-Electra.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
X-Asena - X-Electra
*/

Bixby(
  {
    pattern: "dsedcat",
    fromMe: isPrivate,
    dontAddBixbyList: false,
    type: "Maker menu",
  },
  async (message, match) => {
    if (match === "" || !match.split(";")[0] || !match.split(";")[1])
      return await message.sendMessage(
        "*ᴇxᴀᴍᴘʟᴇ \n╭──────────────── \n│  ᴅᴏɢɢʏ ᴛʀᴏʟʟ;ᴘᴀᴄᴋ \n│   ▢ ᴛʀᴏʟʟ=ᴛᴏᴘ \n│   ▢ ᴘᴀᴄᴋ=ʙᴏᴛᴛᴏᴍ \n╰────────────────╯"
      );

    const buffer = await getBuffer(
      `https://docs-jojo.herokuapp.com/api/meme-gen?top=${
        match.split(";")[0]
      }&bottom=${match.split(";")[1]}&img=https://i.imgur.com/wdoCo3n.jpeg`
    );
    return await message.sendMessage(buffer, {}, "image");
  }
);

/* Copyright (C) 2022 X-Electra.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
X-Asena - X-Electra
*/

Bixby(
  {
    pattern: "esedcat",
    fromMe: isPrivate,
    dontAddBixbyList: false,
    type: "Maker menu",
  },
  async (message, match) => {
    if (match === "" || !match.split(";")[0] || !match.split(";")[1])
      return await message.sendMessage(
        "*ᴇxᴀᴍᴘʟᴇ \n╭──────────────── \n│  ᴅᴏɢɢʏ ᴛʀᴏʟʟ;ᴘᴀᴄᴋ \n│   ▢ ᴛʀᴏʟʟ=ᴛᴏᴘ \n│   ▢ ᴘᴀᴄᴋ=ʙᴏᴛᴛᴏᴍ \n╰────────────────╯"
      );

    const buffer = await getBuffer(
      `https://docs-jojo.herokuapp.com/api/meme-gen?top=${
        match.split(";")[0]
      }&bottom=${match.split(";")[1]}&img=https://i.imgur.com/ttQSzfQ.jpeg`
    );
    return await message.sendMessage(buffer, {}, "image");
  }
);

/* Copyright (C) 2022 X-Electra.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
X-Asena - X-Electra
*/

Bixby(
  {
    pattern: "fsedcat",
    fromMe: isPrivate,
    dontAddBixbyList: false,
    type: "Maker menu",
  },
  async (message, match) => {
    if (match === "" || !match.split(";")[0] || !match.split(";")[1])
      return await message.sendMessage(
        "*ᴇxᴀᴍᴘʟᴇ \n╭──────────────── \n│  ᴅᴏɢɢʏ ᴛʀᴏʟʟ;ᴘᴀᴄᴋ \n│   ▢ ᴛʀᴏʟʟ=ᴛᴏᴘ \n│   ▢ ᴘᴀᴄᴋ=ʙᴏᴛᴛᴏᴍ \n╰────────────────╯"
      );

    const buffer = await getBuffer(
      `https://docs-jojo.herokuapp.com/api/meme-gen?top=${
        match.split(";")[0]
      }&bottom=${match.split(";")[1]}&img=https://i.imgur.com/b88sdCp.jpeg`
    );
    return await message.sendMessage(buffer, {}, "image");
  }
);

/* Copyright (C) 2022 X-Electra.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
X-Asena - X-Electra
*/

Bixby(
  {
    pattern: "alovecat",
    fromMe: isPrivate,
    dontAddBixbyList: false,
    type: "Maker menu",
  },
  async (message, match) => {
    const buffer = await getBuffer(
      `https://docs-jojo.herokuapp.com/api/meme-gen?top=${
        match.split(";")[0]
      }&bottom=%20&img=https://i.imgur.com/SIrTjpF.jpeg`
    );
    return await message.sendMessage(buffer, {}, "image");
  }
);

/* Copyright (C) 2022 X-Electra.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
X-Asena - X-Electra
*/

Bixby(
  {
    pattern: "blovecat?(.*)",
    fromMe: isPrivate,
    dontAddBixbyList: false,
    type: "Maker menu",
  },
  async (message, match) => {
    const buffer = await getBuffer(
      `https://docs-jojo.herokuapp.com/api/meme-gen?top=${
        match.split(";")[0]
      }&bottom=%20&img=https://i.imgur.com/oQMIlfH.jpeg`
    );
    return await message.sendMessage(buffer, {}, "image");
  }
);

/* Copyright (C) 2022 X-Electra.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
X-Asena - X-Electra
*/

Bixby(
  {
    pattern: "clovecat",
    fromMe: isPrivate,
    dontAddBixbyList: false,
    type: "Maker menu",
  },
  async (message, match) => {
    if (match === "" || !match.split(";")[0] || !match.split(";")[1])
      return await message.sendMessage(
        "*ᴇxᴀᴍᴘʟᴇ \n╭──────────────── \n│  ᴅᴏɢɢʏ ᴛʀᴏʟʟ;ᴘᴀᴄᴋ \n│   ▢ ᴛʀᴏʟʟ=ᴛᴏᴘ \n│   ▢ ᴘᴀᴄᴋ=ʙᴏᴛᴛᴏᴍ \n╰────────────────╯"
      );

    const buffer = await getBuffer(
      `https://docs-jojo.herokuapp.com/api/meme-gen?top=${
        match.split(";")[0]
      }&bottom=${match.split(";")[1]}&img=https://i.imgur.com/JyEKXI1.jpeg`
    );
    return await message.sendMessage(buffer, {}, "image");
  }
);

/* Copyright (C) 2022 X-Electra.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
X-Asena - X-Electra
*/

Bixby(
  {
    pattern: "dlovecat",
    fromMe: isPrivate,
    dontAddBixbyList: false,
    type: "Maker menu",
  },
  async (message, match) => {
    if (match === "" || !match.split(";")[0] || !match.split(";")[1])
      return await message.sendMessage(
        "*ᴇxᴀᴍᴘʟᴇ \n╭──────────────── \n│  ᴅᴏɢɢʏ ᴛʀᴏʟʟ;ᴘᴀᴄᴋ \n│   ▢ ᴛʀᴏʟʟ=ᴛᴏᴘ \n│   ▢ ᴘᴀᴄᴋ=ʙᴏᴛᴛᴏᴍ \n╰────────────────╯"
      );

    const buffer = await getBuffer(
      `https://docs-jojo.herokuapp.com/api/meme-gen?top=${
        match.split(";")[0]
      }&bottom=${match.split(";")[1]}&img=https://i.imgur.com/InDs7ru.jpeg`
    );
    return await message.sendMessage(buffer, {}, "image");
  }
);

/* Copyright (C) 2022 X-Electra.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
X-Asena - X-Electra
*/

Bixby(
  {
    pattern: "elovecat",
    fromMe: isPrivate,
    dontAddBixbyList: false,
    type: "Maker menu",
  },
  async (message, match) => {
    if (match === "" || !match.split(";")[0] || !match.split(";")[1])
      return await message.sendMessage(
        "*ᴇxᴀᴍᴘʟᴇ \n╭──────────────── \n│  ᴅᴏɢɢʏ ᴛʀᴏʟʟ;ᴘᴀᴄᴋ \n│   ▢ ᴛʀᴏʟʟ=ᴛᴏᴘ \n│   ▢ ᴘᴀᴄᴋ=ʙᴏᴛᴛᴏᴍ \n╰────────────────╯"
      );

    const buffer = await getBuffer(
      `https://docs-jojo.herokuapp.com/api/meme-gen?top=${
        match.split(";")[0]
      }&bottom=${match.split(";")[1]}&img=https://i.imgur.com/KURVqlz.jpeg`
    );
    return await message.sendMessage(buffer, {}, "image");
  }
);

/* Copyright (C) 2022 X-Electra.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
X-Asena - X-Electra
*/

Bixby(
  {
    pattern: "fovecat",
    fromMe: isPrivate,
    dontAddBixbyList: false,
    type: "Maker menu",
  },
  async (message, match) => {
    if (match === "" || !match.split(";")[0] || !match.split(";")[1])
      return await message.sendMessage(
        "*ᴇxᴀᴍᴘʟᴇ \n╭──────────────── \n│  ᴅᴏɢɢʏ ᴛʀᴏʟʟ;ᴘᴀᴄᴋ \n│   ▢ ᴛʀᴏʟʟ=ᴛᴏᴘ \n│   ▢ ᴘᴀᴄᴋ=ʙᴏᴛᴛᴏᴍ \n╰────────────────╯"
      );

    const buffer = await getBuffer(
      `https://docs-jojo.herokuapp.com/api/meme-gen?top=${
        match.split(";")[0]
      }&bottom=${match.split(";")[1]}&img=https://i.imgur.com/4bzB8mT.png`
    );
    return await message.sendMessage(buffer, {}, "image");
  }
);

/* Copyright (C) 2022 X-Electra.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
X-Asena - X-Electra
*/

Bixby(
  {
    pattern: "aangrycat",
    fromMe: isPrivate,
    dontAddBixbyList: false,
    type: "Maker menu",
  },
  async (message, match) => {
    const buffer = await getBuffer(
      `https://docs-jojo.herokuapp.com/api/meme-gen?top=${
        match.split(";")[0]
      }&bottom=%20&img=https://i.imgur.com/Cg2y9kP.jpeg`
    );
    return await message.sendMessage(buffer, {}, "image");
  }
);

/* Copyright (C) 2022 X-Electra.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
X-Asena - X-Electra
*/

Bixby(
  {
    pattern: "bangrycat?(.*)",
    fromMe: isPrivate,
    dontAddBixbyList: false,
    type: "Maker menu",
  },
  async (message, match) => {
    const buffer = await getBuffer(
      `https://docs-jojo.herokuapp.com/api/meme-gen?top=${
        match.split(";")[0]
      }&bottom=%20&img=https://i.imgur.com/QShIqGQ.jpeg`
    );
    return await message.sendMessage(buffer, {}, "image");
  }
);

/* Copyright (C) 2022 X-Electra.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
X-Asena - X-Electra
*/

Bixby(
  {
    pattern: "cangrycat",
    fromMe: isPrivate,
    dontAddBixbyList: false,
    type: "Maker menu",
  },
  async (message, match) => {
    if (match === "" || !match.split(";")[0] || !match.split(";")[1])
      return await message.sendMessage(
        "*ᴇxᴀᴍᴘʟᴇ \n╭──────────────── \n│  ᴅᴏɢɢʏ ᴛʀᴏʟʟ;ᴘᴀᴄᴋ \n│   ▢ ᴛʀᴏʟʟ=ᴛᴏᴘ \n│   ▢ ᴘᴀᴄᴋ=ʙᴏᴛᴛᴏᴍ \n╰────────────────╯"
      );

    const buffer = await getBuffer(
      `https://docs-jojo.herokuapp.com/api/meme-gen?top=${
        match.split(";")[0]
      }&bottom=${match.split(";")[1]}&img=https://i.imgur.com/9PzbtLH.jpeg`
    );
    return await message.sendMessage(buffer, {}, "image");
  }
);

/* Copyright (C) 2022 X-Electra.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
X-Asena - X-Electra
*/

Bixby(
  {
    pattern: "dangrycat",
    fromMe: isPrivate,
    dontAddBixbyList: false,
    type: "Maker menu",
  },
  async (message, match) => {
    if (match === "" || !match.split(";")[0] || !match.split(";")[1])
      return await message.sendMessage(
        "*ᴇxᴀᴍᴘʟᴇ \n╭──────────────── \n│  ᴅᴏɢɢʏ ᴛʀᴏʟʟ;ᴘᴀᴄᴋ \n│   ▢ ᴛʀᴏʟʟ=ᴛᴏᴘ \n│   ▢ ᴘᴀᴄᴋ=ʙᴏᴛᴛᴏᴍ \n╰────────────────╯"
      );

    const buffer = await getBuffer(
      `https://docs-jojo.herokuapp.com/api/meme-gen?top=${
        match.split(";")[0]
      }&bottom=${match.split(";")[1]}&img=https://i.imgur.com/InDs7ru.jpeg`
    );
    return await message.sendMessage(buffer, {}, "image");
  }
);

/* Copyright (C) 2022 X-Electra.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
X-Asena - X-Electra
*/

Bixby(
  {
    pattern: "eangrycat",
    fromMe: isPrivate,
    dontAddBixbyList: false,
    type: "Maker menu",
  },
  async (message, match) => {
    if (match === "" || !match.split(";")[0] || !match.split(";")[1])
      return await message.sendMessage(
        "*ᴇxᴀᴍᴘʟᴇ \n╭──────────────── \n│  ᴅᴏɢɢʏ ᴛʀᴏʟʟ;ᴘᴀᴄᴋ \n│   ▢ ᴛʀᴏʟʟ=ᴛᴏᴘ \n│   ▢ ᴘᴀᴄᴋ=ʙᴏᴛᴛᴏᴍ \n╰────────────────╯"
      );

    const buffer = await getBuffer(
      `https://docs-jojo.herokuapp.com/api/meme-gen?top=${
        match.split(";")[0]
      }&bottom=${match.split(";")[1]}&img=https://i.imgur.com/nvYlfFe.jpeg`
    );
    return await message.sendMessage(buffer, {}, "image");
  }
);

/* Copyright (C) 2022 X-Electra.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
X-Asena - X-Electra
*/

Bixby(
  {
    pattern: "fangrycat",
    fromMe: isPrivate,
    dontAddBixbyList: false,
    type: "Maker menu",
  },
  async (message, match) => {
    if (match === "" || !match.split(";")[0] || !match.split(";")[1])
      return await message.sendMessage(
        "*ᴇxᴀᴍᴘʟᴇ \n╭──────────────── \n│  ᴅᴏɢɢʏ ᴛʀᴏʟʟ;ᴘᴀᴄᴋ \n│   ▢ ᴛʀᴏʟʟ=ᴛᴏᴘ \n│   ▢ ᴘᴀᴄᴋ=ʙᴏᴛᴛᴏᴍ \n╰────────────────╯"
      );

    const buffer = await getBuffer(
      `https://docs-jojo.herokuapp.com/api/meme-gen?top=${
        match.split(";")[0]
      }&bottom=${match.split(";")[1]}&img=https://i.imgur.com/NyusYzP.jpeg`
    );
    return await message.sendMessage(buffer, {}, "image");
  }
);

/* Copyright (C) 2022 X-Electra.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
X-Asena - X-Electra
*/

Bixby(
  {
    pattern: "acutecat",
    fromMe: isPrivate,
    dontAddBixbyList: false,
    type: "Maker menu",
  },
  async (message, match) => {
    const buffer = await getBuffer(
      `https://docs-jojo.herokuapp.com/api/meme-gen?top=${
        match.split(";")[0]
      }&bottom=%20&img=https://i.imgur.com/uvcSdde.jpeg`
    );
    return await message.sendMessage(buffer, {}, "image");
  }
);

/* Copyright (C) 2022 X-Electra.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
X-Asena - X-Electra
*/

Bixby(
  {
    pattern: "bcutecat",
    fromMe: isPrivate,
    dontAddBixbyList: false,
    type: "Maker menu",
  },
  async (message, match) => {
    if (match === "" || !match.split(";")[0] || !match.split(";")[1])
      return await message.sendMessage(
        "*ᴇxᴀᴍᴘʟᴇ \n╭──────────────── \n│  ᴅᴏɢɢʏ ᴛʀᴏʟʟ;ᴘᴀᴄᴋ \n│   ▢ ᴛʀᴏʟʟ=ᴛᴏᴘ \n│   ▢ ᴘᴀᴄᴋ=ʙᴏᴛᴛᴏᴍ \n╰────────────────╯"
      );

    const buffer = await getBuffer(
      `https://docs-jojo.herokuapp.com/api/meme-gen?top=${
        match.split(";")[0]
      }&bottom=${match.split(";")[1]}&img=https://i.imgur.com/bVxisI5.jpeg`
    );
    return await message.sendMessage(buffer, {}, "image");
  }
);

/* Copyright (C) 2022 X-Electra.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
X-Asena - X-Electra
*/

Bixby(
  {
    pattern: "ccutecat",
    fromMe: isPrivate,
    dontAddBixbyList: false,
    type: "Maker menu",
  },
  async (message, match) => {
    if (match === "" || !match.split(";")[0] || !match.split(";")[1])
      return await message.sendMessage(
        "*ᴇxᴀᴍᴘʟᴇ \n╭──────────────── \n│  ᴅᴏɢɢʏ ᴛʀᴏʟʟ;ᴘᴀᴄᴋ \n│   ▢ ᴛʀᴏʟʟ=ᴛᴏᴘ \n│   ▢ ᴘᴀᴄᴋ=ʙᴏᴛᴛᴏᴍ \n╰────────────────╯"
      );

    const buffer = await getBuffer(
      `https://docs-jojo.herokuapp.com/api/meme-gen?top=${
        match.split(";")[0]
      }&bottom=${match.split(";")[1]}&img=https://i.imgur.com/dO2j0iL.jpeg`
    );
    return await message.sendMessage(buffer, {}, "image");
  }
);

/* Copyright (C) 2022 X-Electra.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
X-Asena - X-Electra
*/

Bixby(
  {
    pattern: "orgsm",
    fromMe: isPrivate,
    dontAddBixbyList: false,
    type: "Maker menu",
  },
  async (message, match) => {
    const buffer = await getBuffer(
      `https://docs-jojo.herokuapp.com/api/meme-gen?top=${
        match.split(";")[0]
      }&bottom=%20&img=https://i.imgur.com/3YiONmk.jpeg`
    );
    return await message.sendMessage(buffer, {}, "image");
  }
);

/* Copyright (C) 2022 X-Electra.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
X-Asena - X-Electra
*/

Bixby(
  {
    pattern: "dcutecat",
    fromMe: isPrivate,
    dontAddBixbyList: false,
    type: "Maker menu",
  },
  async (message, match) => {
    if (match === "" || !match.split(";")[0] || !match.split(";")[1])
      return await message.sendMessage(
        "*ᴇxᴀᴍᴘʟᴇ \n╭──────────────── \n│  ᴅᴏɢɢʏ ᴛʀᴏʟʟ;ᴘᴀᴄᴋ \n│   ▢ ᴛʀᴏʟʟ=ᴛᴏᴘ \n│   ▢ ᴘᴀᴄᴋ=ʙᴏᴛᴛᴏᴍ \n╰────────────────╯"
      );

    const buffer = await getBuffer(
      `https://docs-jojo.herokuapp.com/api/meme-gen?top=${
        match.split(";")[0]
      }&bottom=${match.split(";")[1]}&img=https://i.imgur.com/N8jjMxb.jpeg`
    );
    return await message.sendMessage(buffer, {}, "image");
  }
);

/* Copyright (C) 2022 X-Electra.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
X-Asena - X-Electra
*/

Bixby(
  {
    pattern: "ecutecat",
    fromMe: isPrivate,
    dontAddBixbyList: false,
    type: "Maker menu",
  },
  async (message, match) => {
    if (match === "" || !match.split(";")[0] || !match.split(";")[1])
      return await message.sendMessage(
        "*ᴇxᴀᴍᴘʟᴇ \n╭──────────────── \n│  ᴅᴏɢɢʏ ᴛʀᴏʟʟ;ᴘᴀᴄᴋ \n│   ▢ ᴛʀᴏʟʟ=ᴛᴏᴘ \n│   ▢ ᴘᴀᴄᴋ=ʙᴏᴛᴛᴏᴍ \n╰────────────────╯"
      );

    const buffer = await getBuffer(
      `https://docs-jojo.herokuapp.com/api/meme-gen?top=${
        match.split(";")[0]
      }&bottom=${match.split(";")[1]}&img=https://i.imgur.com/1l87r7u.jpeg`
    );
    return await message.sendMessage(buffer, {}, "image");
  }
);

/* Copyright (C) 2022 X-Electra.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
X-Asena - X-Electra
*/

Bixby(
  {
    pattern: "fcutecat",
    fromMe: isPrivate,
    dontAddBixbyList: false,
    type: "Maker menu",
  },
  async (message, match) => {
    if (match === "" || !match.split(";")[0] || !match.split(";")[1])
      return await message.sendMessage(
        "*ᴇxᴀᴍᴘʟᴇ \n╭──────────────── \n│  ᴅᴏɢɢʏ ᴛʀᴏʟʟ;ᴘᴀᴄᴋ \n│   ▢ ᴛʀᴏʟʟ=ᴛᴏᴘ \n│   ▢ ᴘᴀᴄᴋ=ʙᴏᴛᴛᴏᴍ \n╰────────────────╯"
      );

    const buffer = await getBuffer(
      `https://docs-jojo.herokuapp.com/api/meme-gen?top=${
        match.split(";")[0]
      }&bottom=${match.split(";")[1]}&img=https://i.imgur.com/fXeNyWK.jpeg`
    );
    return await message.sendMessage(buffer, {}, "image");
  }
);

/* Copyright (C) 2022 X-Electra.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
X-Asena - X-Electra
*/

Bixby(
  {
    pattern: "my3",
    fromMe: isPrivate,
    dontAddBixbyList: false,
    type: "Maker menu",
  },
  async (message, match) => {
    if (!match) return await message.reply(ll);

    var ttinullimage = await getBuffer(
      `https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${encodeURIComponent(
        match
      )}&img=https://i.imgur.com/3oiVAaC.jpeg`
    );

    await message.sendMessage(ttinullimage, {}, "image");
  }
);

/* Copyright (C) 2022 X-Electra.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
X-Asena - X-Electra
*/

Bixby(
  {
    pattern: "fuck",
    fromMe: isPrivate,
    dontAddBixbyList: false,
    type: "Maker menu",
  },
  async (message, match) => {
    if (!match) return await message.reply(ll);

    var ttinullimage = await getBuffer(
      `https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${encodeURIComponent(
        match
      )}&img=https://telegra.ph/file/9d4db91478cc90cbe814c.jpg/revision/latest/top-crop/width/720/height/720?cb=20190205115000`
    );

    await message.sendMessage(ttinullimage, {}, "image");
  }
);

/* Copyright (C) 2022 X-Electra.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
X-Asena - X-Electra
*/

Bixby(
  {
    pattern: "hii",
    fromMe: isPrivate,
    dontAddBixbyList: false,
    type: "Maker menu",
  },
  async (message, match) => {
    if (!match) return await message.reply(ll);

    var ttinullimage = await getBuffer(
      `https://docs-jojo.herokuapp.com/api/meme-gen?top=hii&bottom=${encodeURIComponent(
        match
      )}&img=https://telegra.ph/file/f5277ae7383f852196e8c.jpg/revision/latest/top-crop/width/1152/height/720?cb=20190205115000`
    );

    await message.sendMessage(ttinullimage, {}, "image");
  }
);

/* Copyright (C) 2022 X-Electra.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
X-Asena - X-Electra
*/

Bixby(
  {
    pattern: "sir",
    fromMe: isPrivate,
    dontAddBixbyList: false,
    type: "Maker menu",
  },
  async (message, match) => {
    if (!match) return await message.reply(ll);

    var ttinullimage = await getBuffer(
      `https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${encodeURIComponent(
        match
      )}&img=https://telegra.ph/file/9d4db91478cc90cbe814c.jpg/revision/latest/top-crop/width/1128/height/720?cb=20190205115000`
    );

    await message.sendMessage(ttinullimage, {}, "image");
  }
);

/* Copyright (C) 2022 X-Electra.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
X-Asena - X-Electra
*/

Bixby(
  {
    pattern: "yasai",
    fromMe: isPrivate,
    dontAddBixbyList: false,
    type: "Maker menu",
  },
  async (message, match) => {
    if (!match) return await message.reply(ll);

    var ttinullimage = await getBuffer(
      `https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${encodeURIComponent(
        match
      )}&img=https://telegra.ph/file/1ec40b3da163e0a55da66.jpg/revision/latest/top-crop/width/1203/height/720?cb=20190205115000`
    );

    await message.sendMessage(ttinullimage, {}, "image");
  }
);

/* Copyright (C) 2022 X-Electra.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
X-Asena - X-Electra
*/

Bixby(
  {
    pattern: "hapoi",
    fromMe: isPrivate,
    dontAddBixbyList: false,
    type: "Maker menu",
  },
  async (message, match) => {
    if (!match) return await message.reply(ll);

    var ttinullimage = await getBuffer(
      `https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${encodeURIComponent(
        match
      )}&img=https://telegra.ph/file/21b92760827dc33301a79.jpg/revision/latest/top-crop/width/916/height/720?cb=20190205115000`
    );

    await message.sendMessage(ttinullimage, {}, "image");
  }
);

/* Copyright (C) 2022 X-Electra.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
X-Asena - X-Electra
*/

Bixby(
  {
    pattern: "uddika",
    fromMe: isPrivate,
    dontAddBixbyList: false,
    type: "Maker menu",
  },
  async (message, match) => {
    if (!match) return await message.reply(ll);

    var ttinullimage = await getBuffer(
      `https://docs-jojo.herokuapp.com/api/meme-gen?top=uddikaputo&bottom=${encodeURIComponent(
        match
      )}&img=https://telegra.ph/file/80c57bf5ac6c0fd0a1ca9.jpg/revision/latest/top-crop/width/747/height/720?cb=20190205115000`
    );

    await message.sendMessage(ttinullimage, {}, "image");
  }
);

/* Copyright (C) 2022 X-Electra.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
X-Asena - X-Electra
*/

Bixby(
  {
    pattern: "aah",
    fromMe: isPrivate,
    dontAddBixbyList: false,
    type: "Maker menu",
  },
  async (message, match) => {
    if (!match) return await message.reply(ll);

    var ttinullimage = await getBuffer(
      `https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${encodeURIComponent(
        match
      )}&img=https://telegra.ph/file/c34d400e0a937ee12a3f7.jpg/revision/latest/top-crop/width/1035/height/720?cb=20190205115000`
    );

    await message.sendMessage(ttinullimage, {}, "image");
  }
);

/* Copyright (C) 2022 X-Electra.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
X-Asena - X-Electra
*/

Bixby(
  {
    pattern: "asai",
    fromMe: isPrivate,
    dontAddBixbyList: false,
    type: "Maker menu",
  },
  async (message, match) => {
    if (!match) return await message.reply(ll);

    var ttinullimage = await getBuffer(
      `https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${encodeURIComponent(
        match
      )}&img=https://telegra.ph/file/0bab6f4db17b4abca2677.jpg/revision/latest/top-crop/width/720/height/720?cb=20190205115000`
    );

    await message.sendMessage(ttinullimage, {}, "image");
  }
);

/* Copyright (C) 2022 X-Electra.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
X-Asena - X-Electra
*/

Bixby(
  {
    pattern: "quby1",
    fromMe: isPrivate,
    dontAddBixbyList: false,
    type: "Maker menu",
  },
  async (message, match) => {
    if (!match) return await message.reply(ll);

    var ttinullimage = await getBuffer(
      `https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${encodeURIComponent(
        match
      )}&img=https://i.imgur.com/rIz7yEg.jpeg`
    );

    await message.sendMessage(ttinullimage, {}, "image");
  }
);

/* Copyright (C) 2022 X-Electra.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
X-Asena - X-Electra
*/

Bixby(
  {
    pattern: "quby2",
    fromMe: isPrivate,
    dontAddBixbyList: false,
    type: "Maker menu",
  },
  async (message, match) => {
    if (!match) return await message.reply(ll);

    var ttinullimage = await getBuffer(
      `https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${encodeURIComponent(
        match
      )}&img=https://i.imgur.com/rrfPeuq.jpeg`
    );

    await message.sendMessage(ttinullimage, {}, "image");
  }
);

/* Copyright (C) 2022 X-Electra.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
X-Asena - X-Electra
*/

Bixby(
  {
    pattern: "quby3",
    fromMe: isPrivate,
    dontAddBixbyList: false,
    type: "Maker menu",
  },
  async (message, match) => {
    if (!match) return await message.reply(ll);

    var ttinullimage = await getBuffer(
      `https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${encodeURIComponent(
        match
      )}&img=https://i.imgur.com/l7ZCF3d.jpeg`
    );

    await message.sendMessage(ttinullimage, {}, "image");
  }
);

/* Copyright (C) 2022 X-Electra.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
X-Asena - X-Electra
*/

Bixby(
  {
    pattern: "quby4",
    fromMe: isPrivate,
    dontAddBixbyList: false,
    type: "Maker menu",
  },
  async (message, match) => {
    if (!match) return await message.reply(ll);

    var ttinullimage = await getBuffer(
      `https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${encodeURIComponent(
        match
      )}&img=https://i.imgur.com/3ohqPtW.jpeg`
    );

    await message.sendMessage(ttinullimage, {}, "image");
  }
);

/* Copyright (C) 2022 X-Electra.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
X-Asena - X-Electra
*/

Bixby(
  {
    pattern: "cat1",
    fromMe: isPrivate,
    dontAddBixbyList: false,
    type: "Maker menu",
  },
  async (message, match) => {
    if (!match) return await message.reply(ll);

    var ttinullimage = await getBuffer(
      `https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${encodeURIComponent(
        match
      )}&img=https://i.imgur.com/7eDuJS9.jpeg`
    );

    await message.sendMessage(ttinullimage, {}, "image");
  }
);

/* Copyright (C) 2022 X-Electra.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
X-Asena - X-Electra
*/

Bixby(
  {
    pattern: "cat2",
    fromMe: isPrivate,
    dontAddBixbyList: false,
    type: "Maker menu",
  },
  async (message, match) => {
    if (!match) return await message.reply(ll);

    var ttinullimage = await getBuffer(
      `https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${encodeURIComponent(
        match
      )}&img=https://i.imgur.com/4t1sZoF.jpeg`
    );

    await message.sendMessage(ttinullimage, {}, "image");
  }
);

/* Copyright (C) 2022 X-Electra.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
X-Asena - X-Electra
*/

Bixby(
  {
    pattern: "cat3",
    fromMe: isPrivate,
    dontAddBixbyList: false,
    type: "Maker menu",
  },
  async (message, match) => {
    if (!match) return await message.reply(ll);

    var ttinullimage = await getBuffer(
      `https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${encodeURIComponent(
        match
      )}&img=https://i.imgur.com/olnvBj7.jpeg`
    );

    await message.sendMessage(ttinullimage, {}, "image");
  }
);

/* Copyright (C) 2022 X-Electra.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
X-Asena - X-Electra
*/

Bixby(
  {
    pattern: "cat4",
    fromMe: isPrivate,
    dontAddBixbyList: false,
    type: "Maker menu",
  },
  async (message, match) => {
    if (!match) return await message.reply(ll);

    var ttinullimage = await getBuffer(
      `https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${encodeURIComponent(
        match
      )}&img=https://i.imgur.com/dTQ43sU.jpeg`
    );

    await message.sendMessage(ttinullimage, {}, "image");
  }
);

/* Copyright (C) 2022 X-Electra.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
X-Asena - X-Electra
*/

Bixby(
  {
    pattern: "trollikka1",
    fromMe: isPrivate,
    dontAddBixbyList: false,
    type: "Maker menu",
  },
  async (message, match) => {
    if (!match) return await message.reply(ll);

    var ttinullimage = await getBuffer(
      `https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${encodeURIComponent(
        match
      )}&img=https://i.imgur.com/03J0RQA.jpeg`
    );

    await message.sendMessage(ttinullimage, {}, "image");
  }
);

/* Copyright (C) 2022 X-Electra.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
X-Asena - X-Electra
*/

Bixby(
  {
    pattern: "trollikka2",
    fromMe: isPrivate,
    dontAddBixbyList: false,
    type: "Maker menu",
  },
  async (message, match) => {
    if (!match) return await message.reply(ll);

    var ttinullimage = await getBuffer(
      `https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${encodeURIComponent(
        match
      )}&img=https://i.imgur.com/03J0RQA.jpeg`
    );

    await message.sendMessage(ttinullimage, {}, "image");
  }
);

/* Copyright (C) 2022 X-Electra.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
X-Asena - X-Electra
*/

Bixby(
  {
    pattern: "trollikka3",
    fromMe: isPrivate,
    dontAddBixbyList: false,
    type: "Maker menu",
  },
  async (message, match) => {
    if (!match) return await message.reply(ll);

    var ttinullimage = await getBuffer(
      `https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${encodeURIComponent(
        match
      )}&img=https://i.imgur.com/oIdcRPg.jpeg`
    );

    await message.sendMessage(ttinullimage, {}, "image");
  }
);

/* Copyright (C) 2022 X-Electra.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
X-Asena - X-Electra
*/

Bixby(
  {
    pattern: "trollikka4",
    fromMe: isPrivate,
    dontAddBixbyList: false,
    type: "Maker menu",
  },
  async (message, match) => {
    if (!match) return await message.reply(ll);

    var ttinullimage = await getBuffer(
      `https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${encodeURIComponent(
        match
      )}&img=https://i.imgur.com/HRLF2Ri.jpeg`
    );

    await message.sendMessage(ttinullimage, {}, "image");
  }
);
