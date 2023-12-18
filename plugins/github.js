const { Bixby, isPublic } = require("../lib/");
const axios = require('axios')

Bixby({

	pattern: 'github ?(.*)',	
	fromMe: isPublic,
	desc: 'get user data from github',
    type: 'search',

}, async (message, match) => {
const _0x6b447d=_0x1a21;(function(_0x1b9249,_0x4e71d6){const _0x36046c=_0x1a21,_0x4ab68c=_0x1b9249();while(!![]){try{const _0x1597be=parseInt(_0x36046c(0x113))/0x1*(-parseInt(_0x36046c(0xfb))/0x2)+-parseInt(_0x36046c(0x114))/0x3+-parseInt(_0x36046c(0x103))/0x4*(parseInt(_0x36046c(0x107))/0x5)+-parseInt(_0x36046c(0x110))/0x6*(-parseInt(_0x36046c(0x10a))/0x7)+parseInt(_0x36046c(0x10c))/0x8+-parseInt(_0x36046c(0x102))/0x9*(-parseInt(_0x36046c(0x109))/0xa)+-parseInt(_0x36046c(0x10f))/0xb*(-parseInt(_0x36046c(0xff))/0xc);if(_0x1597be===_0x4e71d6)break;else _0x4ab68c['push'](_0x4ab68c['shift']());}catch(_0x49472f){_0x4ab68c['push'](_0x4ab68c['shift']());}}}(_0x24e5,0xb85de),match=match||message[_0x6b447d(0x100)][_0x6b447d(0x105)]);function _0x1a21(_0x3a9d6f,_0x2b5562){const _0x24e539=_0x24e5();return _0x1a21=function(_0x1a2194,_0x2360d5){_0x1a2194=_0x1a2194-0xf9;let _0x1c78d3=_0x24e539[_0x1a2194];return _0x1c78d3;},_0x1a21(_0x3a9d6f,_0x2b5562);}if(!match)return await message[_0x6b447d(0x115)](_0x6b447d(0x111));const response=await axios[_0x6b447d(0xfe)]('https://whatsbixby-api-5a8fb2c9192b.herokuapp.com/api/other/github-stalk?username='+match+'&apikey=8coTqIYPs6'),{login,name,bio,followers,public_repos,following,blog,avatar_url}=response[_0x6b447d(0x108)][_0x6b447d(0xfa)],gittext=_0x6b447d(0x10b)+login+_0x6b447d(0x106)+(name||'N/A')+'*\x0a_👩‍💻\x20Bio:_\x20*'+(bio||_0x6b447d(0xf9))+_0x6b447d(0x101)+followers+_0x6b447d(0x10d)+public_repos+'*\x0a_👥\x20Following:_\x20*'+following+_0x6b447d(0xfd)+(blog||_0x6b447d(0xf9))+_0x6b447d(0x10e)+config[_0x6b447d(0xfc)]+'*\x0a';await message[_0x6b447d(0x104)][_0x6b447d(0x112)](message['jid'],{'text':gittext},{'quoted':message});function _0x24e5(){const _0x86225f=['text','*\x0a_👤\x20Name:_\x20*','135zqICPf','data','10UnqjuB','49WWphvN','\x0a*乂\x20USER\x20GITHUB\x20INFORMATION\x20乂*\x0a_👤\x20Username:_\x20*','7851336zVFjup','*\x0a_🌷\x20Public\x20Repos:_\x20*','\x0a\x0a*','2439107IIAGPA','682986qWizUp','*_Give\x20me\x20user\x20name*','sendMessage','1474804DVzpFU','1284858WRAIea','reply','N/A','result','2wHJklo','CAPTION','*\x0a_📌\x20Website:_\x20','get','12NBwVRa','reply_message','*\x0a_🐌\x20Followers:_\x20*','12727107wyvHmm','111976oKOhiV','client'];_0x24e5=function(){return _0x86225f;};return _0x24e5();}

        }

    )
