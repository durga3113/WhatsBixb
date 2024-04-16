const { Bixby, getJson, isPublic} = require("../lib/");
const axios = require('axios')
Bixby({
	pattern: "imdb",
	fromMe: isPublic,
	desc: 'Searching Movie details',
	type: 'search',
}, async (message, match) => {
match = match || message.reply_message.text;
 if (!match) return await message.reply("*Please type a movie or series name*");
let fids = await axios.get(`http://www.omdbapi.com/?apikey=6fb6bfb4&t=${match}&plot=full`)
let imdbt = "";            
            imdbt += "_🎬Title      : " + fids.data.Title + "\n_";
            
            imdbt += "_📅Year       : " + fids.data.Year + "\n_";
            
            imdbt += "_⭐Rated      : " + fids.data.Rated + "\n_";

            imdbt += "_📆Released   : " + fids.data.Released + "\n_";

            imdbt += "_⏳Runtime    : " + fids.data.Runtime + "\n_";

            imdbt += "_🌀Genre      : " + fids.data.Genre + "\n_";

            imdbt += "_👨🏻‍💻Director   : " + fids.data.Director + "\n_";

            imdbt += "_✍Writer     : " + fids.data.Writer + "\n_";

            imdbt += "_👨Actors     : " + fids.data.Actors + "\n_";

            imdbt += "_📃Plot       : " + fids.data.Plot + "\n_";

            imdbt += "_🌐Language   : " + fids.data.Language + "\n_";

            imdbt += "_🌍Country    : " + fids.data.Country + "\n_";

            imdbt += "_🎖️Awards     : " + fids.data.Awards + "\n_";

            imdbt += "_📦BoxOffice  : " + fids.data.BoxOffice + "\n_";

            imdbt += "_🏙️Production : " + fids.data.Production + "\n_";

            imdbt += "_🌟imdbRating : " + fids.data.imdbRating + "\n_";

            imdbt += "_❎imdbVotes  : " + fids.data.imdbVotes + "";

await message.client.sendMessage(message.jid, {

                image: {

                    url: fids.data.Poster,

                },

                caption: imdbt,

            }, {

                quoted: message,

            });

        }

    );
