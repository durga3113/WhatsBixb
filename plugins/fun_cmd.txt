const { dare, truth, random_question } = require("../lib/FuncTruthOrDare")
const axios = require("axios")
const { Bixby, isPublic } = require("../lib")

Bixby(
  {      pattern: "truth",
         fromMe: isPublic,
         type: "mics",
  },
  async(message,match, text) => {
  return await message.reply(`${truth()}`);
}
)

//------------------------------------------
//          TRUTH OR DARE 
//          NEW FEATURE
//------------------------------------------

Bixby(
  {      pattern: "dare",
         fromMe: isPublic,
         type: "mics",
  },
  async(message, match, text) => {
 return await message.reply(`${dare()}`);
}
)
 
//--------------------------------
//------FACTS NEW FEATURE---------
//--------------------------------

Bixby(
  {
       pattern: "fact",
       fromMe: isPublic,
       type: "mics",
 },
 async(message, match, text) => {
      const { data } = await axios.get(`https://nekos.life/api/v2/fact`)
      return message.reply(`*Fact:* ${data.fact}\n\n*Powered by WhatsBixby*`)   
    }
)

//------------------
//    IM BORED 
//-----------------

Bixby(
  {
  pattern: "quote",
  fromMe: isPublic,
  type: "mics",
},
async(message, match, text) => {
var quoo = await axios.get(`https://favqs.com/api/qotd`)
const replyf = `
╔════◇
║ *🎖Content:* ${quoo.data.quote.body}
║ *👤Author:* ${quoo.data.quote.author}
║    made by WhatsBixby
╚════════════╝ `

 return message.reply(replyf)
}
)
