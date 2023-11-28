const { Bixby, isPrivate } = require("../lib/");
Bixby(
	{
		pattern: 'aqt ?(.*)',
		fromMe: isPrivate,
		desc: 'Random anime quote',
		type: 'info',
	},
	async (m, match, client) => {
		const { anime, character, quote } = await getJson('https://animechan.vercel.app/api/random')
		await m.reply( ` ☄️ *ANIME* : _${anime}_\n 🌻 *CHARACTER* : _${character}_\n🖇️ *quote* : ${quote}` )
	}
)


