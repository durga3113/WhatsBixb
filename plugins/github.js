const { Bixby, isPublic } = require("../lib/");
const axios = require('axios')

Bixby({

	pattern: 'github ?(.*)',	
	fromMe: isPublic,
	desc: 'get user data from github',
    type: 'search',

}, async (message, match) => {
const _0x14a443=_0x2915;(function(_0x21507b,_0x415d2a){const _0x4a8b2e=_0x2915,_0x612076=_0x21507b();while(!![]){try{const _0x4e91c4=-parseInt(_0x4a8b2e(0x90))/0x1+parseInt(_0x4a8b2e(0x89))/0x2+parseInt(_0x4a8b2e(0x81))/0x3*(parseInt(_0x4a8b2e(0x95))/0x4)+parseInt(_0x4a8b2e(0x87))/0x5+parseInt(_0x4a8b2e(0x8d))/0x6*(parseInt(_0x4a8b2e(0x83))/0x7)+parseInt(_0x4a8b2e(0x86))/0x8*(parseInt(_0x4a8b2e(0x85))/0x9)+-parseInt(_0x4a8b2e(0x8b))/0xa;if(_0x4e91c4===_0x415d2a)break;else _0x612076['push'](_0x612076['shift']());}catch(_0x5d7c5e){_0x612076['push'](_0x612076['shift']());}}}(_0xf76b,0x341f9),match=match||message[_0x14a443(0x8e)][_0x14a443(0x94)]);function _0xf76b(){const _0x83ad65=['get','165nFXVhj','sendMessage','36050CnDAWo','https://whatsbixby-api-5a8fb2c9192b.herokuapp.com/api/other/github-stalk?username=','27wHppGs','701160OBITMP','271855DtZxbz','reply','498738VwMcBW','*_Weather\x20of\x20\x20','7811630pprDzl','*\x0a\x0a_','246RdhOjW','reply_message','&apikey=8coTqIYPs6','93255HktzUQ','client','data','publicRepos','text','22552UhNJaz','*_Give\x20me\x20location.india!_*'];_0xf76b=function(){return _0x83ad65;};return _0xf76b();}if(!match)return await message[_0x14a443(0x88)](_0x14a443(0x7f));function _0x2915(_0x27abb4,_0x73cef7){const _0xf76bd3=_0xf76b();return _0x2915=function(_0x29152f,_0x5330db){_0x29152f=_0x29152f-0x7f;let _0x3e86e5=_0xf76bd3[_0x29152f];return _0x3e86e5;},_0x2915(_0x27abb4,_0x73cef7);}let wdata=await axios[_0x14a443(0x80)](_0x14a443(0x84)+match+_0x14a443(0x8f)),textw='';textw+=_0x14a443(0x8a)+match+_0x14a443(0x8c),textw+='_*Public\x20repo:-*\x20'+wdata[_0x14a443(0x92)][_0x14a443(0x93)]+'\x0a_',await message[_0x14a443(0x91)][_0x14a443(0x82)](message['jid'],{'text':textw},{'quoted':message});
        }

    )
