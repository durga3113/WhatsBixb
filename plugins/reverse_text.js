const { Bixby, isPrivate } = require('../lib')
Bixby({
	pattern: 'revtext ?(.*)',
	fromMe: isPrivate,
	desc: 'to reverse any text',
	type: 'misc',
}, async (message, match,m) => {
if (!match) return await message.reply("_Give me a text to reverse_")
return await message.reply(match.split("").reverse().join(""))
});
