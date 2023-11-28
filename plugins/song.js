const { Bixby, isPrivate} = require("../lib/");

Bixby({

	pattern: 'song ?(.*)',	fromMe: isPrivate,

	desc: 'Sends button image',

	type: 'misc',

}, async (message, match) => {

let yts = require("yt-search")

let search = await yts(match)

let anu = search.videos[Math.floor(Math.random() * search.videos.length)]

const buttons = [

  {buttonId: 'id1', buttonText: {displayText: 'Button 1'}, type: 1},

  {buttonId: 'id2', buttonText: {displayText: 'Button 2'}, type: 1},

]

const buttonMessage = {

    image: {url: anu.thumbnail },

    caption: `*| YOUTUBE PLAY |*

Title : ${anu.title}

Ext : Search

ID : ${anu.videoId}

Duration : ${anu.timestamp}

Viewers : ${anu.views}

Uploaded : ${anu.ago}

Author : ${anu.author.name}

Channel : ${anu.author.url}`,

    footer: 'Abu-MD',

    buttons: buttons,

    headerType: 1

}

await message.client.sendMessage(message.jid, buttonMessage)

})
