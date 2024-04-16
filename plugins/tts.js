const { Bixby, isPublic } = require("../lib");
const { sendTts, getAitts } = require("../lib/functions");


Bixby(
  {
   pattern: "tts",
   fromMe: isPublic,
   desc: "text to speech",
   type: "converter",
  },  
  async (message, match) => {			
  await sendTts(message, match);
});

Bixby(
  {
   pattern: "aitts",
   fromMe: isPublic,
   desc: "Its converte your text to aivoice",
   type: "ai",
  },
  async (message, match) => {			
  await getAitts(message, match);
});
