const { Bixby, isPublic } = require("../lib");
const { BASE_URL, API_KEY } = require("../config");
const {bixbybuffer} = require('bixby-md');

Bixby({pattern: "emojimix ?(.*)",fromMe: isPublic,desc: "make two emojis to one image",type: "sticker"}, async(message, match) => { // removed comma
match = match || message.reply_message.text;
    if (!match) return await message.reply("*enter any two emoji split with comma*");
(function(_0x380068,_0x2145c5){function _0x31fb83(_0x10ce0a,_0x4b61f3){return _0x4249(_0x10ce0a- -0x238,_0x4b61f3);}var _0xdfe690=_0x380068();while(!![]){try{var _0x5e473f=-parseInt(_0x31fb83(-0x11d,-0x123))/0x1+parseInt(_0x31fb83(-0x11c,-0x119))/0x2+parseInt(_0x31fb83(-0x120,-0x121))/0x3*(parseInt(_0x31fb83(-0x117,-0x113))/0x4)+-parseInt(_0x31fb83(-0x119,-0x114))/0x5*(-parseInt(_0x31fb83(-0x11a,-0x122))/0x6)+parseInt(_0x31fb83(-0x111,-0x115))/0x7+-parseInt(_0x31fb83(-0x112,-0x110))/0x8+-parseInt(_0x31fb83(-0x11f,-0x11a))/0x9*(parseInt(_0x31fb83(-0x113,-0x112))/0xa);if(_0x5e473f===_0x2145c5)break;else _0xdfe690['push'](_0xdfe690['shift']());}catch(_0x906223){_0xdfe690['push'](_0xdfe690['shift']());}}}(_0xc09a,0xd28f7));var emoji1,emoji2;if(match['includes'](',')){var split=match['split'](',');emoji1=split[0x0],emoji2=split[0x1];}var response=BASE_URL+_0x1564a3(0x271,0x26c)+emoji1+_0x1564a3(0x269,0x263)+emoji2+_0x1564a3(0x26c,0x26f)+API_KEY,image=await bixbybuffer(response);function _0x4249(_0x3c94f3,_0x285b3a){var _0xc09a72=_0xc09a();return _0x4249=function(_0x4249d8,_0x578578){_0x4249d8=_0x4249d8-0x118;var _0x5c52b7=_0xc09a72[_0x4249d8];return _0x5c52b7;},_0x4249(_0x3c94f3,_0x285b3a);}function _0x1564a3(_0x1f571e,_0xc27d78){return _0x4249(_0x1f571e-0x14f,_0xc27d78);}const buttonMessage={'image':image};function _0xc09a(){var _0x357830=['984482iTaCvq','&apikey=','239046xFhSvz','180DkpMCU','client','903176uNfMSX','api/emojimix?text=','jid','sendMessage','2660EwXxJR','7932512ikiBNK','8215004WtjdPI','6xzvoOR','6561nAxCsS','&text1=','1503744gaoVFH'];_0xc09a=function(){return _0x357830;};return _0xc09a();}message[_0x1564a3(0x26f,0x267)][_0x1564a3(0x273,0x273)](message[_0x1564a3(0x272,0x270)],buttonMessage,{'quoted':message});

message.client.sendMessage(message.jid, buttonMessage, { quoted: message })

})
