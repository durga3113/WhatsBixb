const { Bixby, isPublic, getJson } = require("../lib/");
const { XKCDComic } = require("../lib/functions");
Bixby(
  {
    pattern: "joke",
    fromMe: isPublic,
    desc: "Fetch a random joke",
    type: "fun",
  },
  async (message) => {
    try {
      const jokeData = await getJson(
        "https://v2.jokeapi.dev/joke/Any?type=twopart"
      );

      if (jokeData && !jokeData.error) {
        const jokeMessage = jokeData.setup+'\n'+jokeData.delivery;
        message.sendMessage(jokeMessage);
      } else {
        console.error("Error fetching joke:", jokeData);
        message.reply("Failed to fetch a joke. Please try again later.");
      }
    } catch (error) {
      console.error("Error fetching joke:", error);
      message.reply("Failed to fetch a joke. Please try again later.");
    }
  }
);

Bixby(
  {
    pattern: "xkcd",
    fromMe: isPublic,
    desc: "Send a random XKCD comic.",
    type: "fun",
  },
  async (message, match, m) => {
    try {
      const result = await XKCDComic();
      message.sendMessage(result.imageUrl, { quoted: message.data }, "image");
    } catch (error) {
      console.error("Error:", error.message);
      message.reply("Error fetching XKCD comic.");
    }
  }
);
