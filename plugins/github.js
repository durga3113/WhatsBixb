const { Bixby, isPublic } = require("../lib/");
const axios = require('axios')
const config = require("../config");

Bixby({

	pattern: 'github ?(.*)',	
	fromMe: isPublic,
	desc: 'get user data from github',
    type: 'search',

}, async (message, match) => {
function _0x30eb(){const _0x11e5db=['22SUlmHV','13621622YfxTZo','\x0a*乂\x20USER\x20GITHUB\x20INFORMATION\x20乂*\x0a_👤\x20Username:_\x20*','client','*\x0a_👤\x20Name:_\x20*','https://whatsbixby-api-5a8fb2c9192b.herokuapp.com/api/other/github-stalk?username=','730hxYCAa','50CrmYOx','*\x0a_👩‍💻\x20Bio:_\x20*','605536BeDaZd','193383dYwFza','5616072ZpTzCc','11580114dZtPuY','*\x0a_📌\x20Website:_\x20','*\x0a_🐌\x20Followers:_\x20*','1788887tdpbWj','294654ZFrjhb','*\x0a_👥\x20Following:_\x20*','\x0a\x0a*','N/A','8TuffMB','BOT_NAME'];_0x30eb=function(){return _0x11e5db;};return _0x30eb();}const _0x580de7=_0x59d7;(function(_0xb1145f,_0x21b93f){const _0x23b88a=_0x59d7,_0x116aaa=_0xb1145f();while(!![]){try{const _0x2d99aa=parseInt(_0x23b88a(0x112))/0x1+-parseInt(_0x23b88a(0x119))/0x2*(parseInt(_0x23b88a(0x113))/0x3)+parseInt(_0x23b88a(0x122))/0x4*(-parseInt(_0x23b88a(0x120))/0x5)+parseInt(_0x23b88a(0x10f))/0x6+-parseInt(_0x23b88a(0x11a))/0x7*(-parseInt(_0x23b88a(0x117))/0x8)+-parseInt(_0x23b88a(0x10d))/0x9*(parseInt(_0x23b88a(0x11f))/0xa)+-parseInt(_0x23b88a(0x10e))/0xb;if(_0x2d99aa===_0x21b93f)break;else _0x116aaa['push'](_0x116aaa['shift']());}catch(_0x2c8da5){_0x116aaa['push'](_0x116aaa['shift']());}}}(_0x30eb,0xf2117),match=match||message['reply_message']['text']);if(!match)return await message['reply']('*_Give\x20me\x20user\x20name*');function _0x59d7(_0x41bda,_0xe7465){const _0x30ebfe=_0x30eb();return _0x59d7=function(_0x59d790,_0x294a89){_0x59d790=_0x59d790-0x10d;let _0x58d958=_0x30ebfe[_0x59d790];return _0x58d958;},_0x59d7(_0x41bda,_0xe7465);}const response=await axios['get'](_0x580de7(0x11e)+match+'&apikey=8coTqIYPs6'),{login,name,bio,followers,public_repos,following,blog,avatar_url}=response['data'],gittext=_0x580de7(0x11b)+login+_0x580de7(0x11d)+(name||_0x580de7(0x116))+_0x580de7(0x121)+(bio||'N/A')+_0x580de7(0x111)+followers+'*\x0a_🌷\x20Public\x20Repos:_\x20*'+public_repos+_0x580de7(0x114)+following+_0x580de7(0x110)+(blog||_0x580de7(0x116))+_0x580de7(0x115)+config[_0x580de7(0x118)]+'*\x0a';await message[_0x580de7(0x11c)]['sendMessage'](message['jid'],{'text':gittext},{'quoted':message});
        }

    )
