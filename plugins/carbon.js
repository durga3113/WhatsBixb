const { Bixby, isPublic, getBuffer } = require("../lib/");
const { BASE_URL, API_KEY, CAPTION } = require("../config");

Bixby(
  {
    pattern: "carbon",
    fromMe: isPublic,
    desc: "create a carbon for text",
    type: "misc",
  },
  async (message, match) => {
  if (!match) return await message.reply('Please give any text');
  const response = await axios.get(`${BASE_URL}api/carbon?text=${match}&apikey=${API_KEY}`);	    
  var img = await getBuffer(response.data.result);
  const imgMessage = {
  image: img,
  caption: CAPTION,
  }
  message.client.sendMessage(message.jid, imgMessage) 
  });
