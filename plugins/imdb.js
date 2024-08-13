const { Bixby, getJson, isPublic} = require("../lib");
const { BASE_URL, API_KEY } = require("../config");
const axios = require("axios");

Bixby({
	pattern: "imdb",
	fromMe: isPublic,
	desc: 'Searching Movie details',
	type: 'search',
}, async (message, match) => {
	
match = match || message.reply_message.text;
if (!match) return await message.reply("*Please type a movie or series name*");
let fids = await axios.get(`${BASE_URL}api/imdb?movie=${match}&apikey=${API_KEY}`)
let imdbt = "";            
            imdbt += "_🎬Title      : " + fids.data.result.Title + "\n_";
            
            imdbt += "_📅Year       : " + fids.data.result.Year + "\n_";
            
            imdbt += "_⭐Rated      : " + fids.data.result.Rated + "\n_";

            imdbt += "_📆Released   : " + fids.data.result.Released + "\n_";

            imdbt += "_⏳Runtime    : " + fids.data.result.Runtime + "\n_";

            imdbt += "_🌀Genre      : " + fids.data.result.Genre + "\n_";

            imdbt += "_👨🏻‍💻Director   : " + fids.data.result.Director + "\n_";

            imdbt += "_✍Writer     : " + fids.data.result.Writer + "\n_";

            imdbt += "_👨Actors     : " + fids.data.result.Actors + "\n_";

            imdbt += "_📃Plot       : " + fids.data.result.Plot + "\n_";

            imdbt += "_🌐Language   : " + fids.data.result.Language + "\n_";

            imdbt += "_🌍Country    : " + fids.data.result.Country + "\n_";

            imdbt += "_🎖️Awards     : " + fids.data.result.Awards + "\n_";

            imdbt += "_📦BoxOffice  : " + fids.data.result.BoxOffice + "\n_";

            imdbt += "_🏙️Production : " + fids.data.result.Production + "\n_";

            imdbt += "_🌟imdbRating : " + fids.data.result.imdbRating + "\n_";

            imdbt += "_❎imdbVotes  : " + fids.data.result.imdbVotes + "";

await message.client.sendMessage(message.jid, {
image: { url: fids.data.result.Poster, },
caption: imdbt,}, { quoted: message, });
});
