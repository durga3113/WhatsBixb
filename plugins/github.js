const { Bixby, isPublic } = require("../lib/");
const axios = require('axios')
const config = require("../config");

Bixby({

	pattern: 'github ?(.*)',	
	fromMe: isPublic,
	desc: 'get user data from github',
    type: 'search',

}, async (message, match) => {
const _0x38a5f4=_0x54ea;function _0x5df0(){const _0x41eb57=['87416rLbdxZ','*_Give\x20me\x20user\x20name*','result','BOT_NAME','data','sendMessage','*\x0a_👩‍💻\x20Bio:_\x20*','*\x0a_🐌\x20Followers:_\x20*','17LvQqgJ','https://whatsbixby-api-5a8fb2c9192b.herokuapp.com/api/other/github-stalk?username=','1014351VvOSGQ','5262440ZLQoMz','N/A','1466480scfdyt','20558rHuvaC','jid','6hJwTkw','128jUxYBG','777384yPstqC','\x0a\x0a*','get','2137665qAAlDS','reply_message','*\x0a_🌷\x20Public\x20Repos:_\x20*','*\x0a_👥\x20Following:_\x20*'];_0x5df0=function(){return _0x41eb57;};return _0x5df0();}function _0x54ea(_0x41f9d4,_0x2b6839){const _0x5df0c4=_0x5df0();return _0x54ea=function(_0x54ea9d,_0x19e631){_0x54ea9d=_0x54ea9d-0x196;let _0x4b3bfc=_0x5df0c4[_0x54ea9d];return _0x4b3bfc;},_0x54ea(_0x41f9d4,_0x2b6839);}(function(_0xa28cbf,_0x1302bb){const _0x479770=_0x54ea,_0x53366c=_0xa28cbf();while(!![]){try{const _0x17ae5d=parseInt(_0x479770(0x196))/0x1*(-parseInt(_0x479770(0x19c))/0x2)+-parseInt(_0x479770(0x198))/0x3+parseInt(_0x479770(0x19b))/0x4+parseInt(_0x479770(0x1a3))/0x5*(-parseInt(_0x479770(0x19e))/0x6)+-parseInt(_0x479770(0x1a7))/0x7*(-parseInt(_0x479770(0x19f))/0x8)+parseInt(_0x479770(0x1a0))/0x9+parseInt(_0x479770(0x199))/0xa;if(_0x17ae5d===_0x1302bb)break;else _0x53366c['push'](_0x53366c['shift']());}catch(_0x222d54){_0x53366c['push'](_0x53366c['shift']());}}}(_0x5df0,0x3a43f),match=match||message[_0x38a5f4(0x1a4)]['text']);if(!match)return await message['reply'](_0x38a5f4(0x1a8));const response=await axios[_0x38a5f4(0x1a2)](_0x38a5f4(0x197)+match+'&apikey=8coTqIYPs6'),{login,name,bio,followers,public_repos,following,blog,avatar_url}=response[_0x38a5f4(0x1ab)][_0x38a5f4(0x1a9)],gittext='\x0a*乂\x20USER\x20GITHUB\x20INFORMATION\x20乂*\x0a_👤\x20Username:_\x20*'+login+'*\x0a_👤\x20Name:_\x20*'+(name||_0x38a5f4(0x19a))+_0x38a5f4(0x1ad)+(bio||_0x38a5f4(0x19a))+_0x38a5f4(0x1ae)+followers+_0x38a5f4(0x1a5)+public_repos+_0x38a5f4(0x1a6)+following+'*\x0a_📌\x20Website:_\x20'+(blog||'N/A')+_0x38a5f4(0x1a1)+config[_0x38a5f4(0x1aa)]+'*\x0a';await message['client'][_0x38a5f4(0x1ac)](message[_0x38a5f4(0x19d)],{'text':gittext},{'quoted':message});
        }

    )
