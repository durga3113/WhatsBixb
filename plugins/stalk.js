const { Bixby, isPublic, tiny } = require("../lib/");
const axios = require('axios')
const config = require("../config");
const { BASE_URL, API_KEY } = require("../config");

Bixby({

	pattern: 'github ?(.*)',	
	fromMe: isPublic,
	desc: 'get user data from github',
    type: 'search',

}, async (message, match) => {
match = match || message.reply_message.text;
 if (!match) return await message.reply("*_Give me user name*");
const response = await axios.get(`${BASE_URL}api/other/github-stalk?username=${match}&apikey=${API_KEY}`);
const _0x103823=_0xaeb8;function _0xaeb8(_0x4cf6ec,_0x47c762){const _0x358ac7=_0x358a();return _0xaeb8=function(_0xaeb8e4,_0x173a9a){_0xaeb8e4=_0xaeb8e4-0x119;let _0x4e7779=_0x358ac7[_0xaeb8e4];return _0x4e7779;},_0xaeb8(_0x4cf6ec,_0x47c762);}(function(_0x447aad,_0x350a7e){const _0x32d4da=_0xaeb8,_0x1882bb=_0x447aad();while(!![]){try{const _0x242110=-parseInt(_0x32d4da(0x12c))/0x1+-parseInt(_0x32d4da(0x122))/0x2*(-parseInt(_0x32d4da(0x121))/0x3)+parseInt(_0x32d4da(0x11c))/0x4+-parseInt(_0x32d4da(0x124))/0x5+parseInt(_0x32d4da(0x119))/0x6+parseInt(_0x32d4da(0x11a))/0x7+parseInt(_0x32d4da(0x129))/0x8;if(_0x242110===_0x350a7e)break;else _0x1882bb['push'](_0x1882bb['shift']());}catch(_0x898a52){_0x1882bb['push'](_0x1882bb['shift']());}}}(_0x358a,0xd808d));const {login,name,bio,followers,public_repos,following,blog,avatar_url}=response[_0x103823(0x120)][_0x103823(0x125)],gittext=_0x103823(0x128)+login+_0x103823(0x123)+(name||'N/A')+_0x103823(0x126)+(bio||_0x103823(0x11b))+_0x103823(0x12a)+followers+_0x103823(0x11e)+public_repos+_0x103823(0x127)+following+_0x103823(0x11f)+(blog||_0x103823(0x11b))+'*\x0a';await message[_0x103823(0x11d)][_0x103823(0x12b)](message['jid'],{'image':{'url':avatar_url},'caption':tiny(gittext)},{'quoted':message});function _0x358a(){const _0x5711d7=['*\x0a_🌐\x20Website:_\x20','data','18IIiRPE','97628SZOzzo','*\x0a_👤\x20Name:_\x20*','8772120ElsHAp','result','*\x0a_👩‍💻\x20Bio:_\x20*','*\x0a_👥\x20Following:_\x20*','\x0a*\x20USER\x20GITHUB\x20INFORMATION\x20*\x0a_👤\x20Username:_\x20*','7409080HteJkF','*\x0a_🐌\x20Followers:_\x20*','sendMessage','1273712GOSKxK','8057934OHkYxi','7501501uGZYDr','N/A','1117448Hwilgz','client','*\x0a_🌷\x20Public\x20Repos:_\x20*'];_0x358a=function(){return _0x5711d7;};return _0x358a();}
        }

    )	

Bixby(
  {
    pattern: "ig",
    fromMe: isPublic,
    desc: "insta profile search",
    type: "search",
  },
  async (message, match) => {
match = match || message.reply_message.text;
 if (!match) return await message.reply("*_Give me user name*");
const response = await axios.get(`${BASE_URL}api/ig/stalk?username=${match}&apikey=${API_KEY}`
       );

const { full_name, username, profile_pic_url, posts, following, followers, biography, is_private, is_verified } = response.data.result.user_info;
const Text = `\`\`\`\nusername : ${username}\nname : ${full_name}\nposts : ${posts}\nfollowers : ${followers}\nfollowing : ${following}\nprivate account: ${is_private}\nverified account: ${is_verified}\nbio : ${biography}\n\`\`\``;
        
const buttonMessage = {
    image: {url: profile_pic_url},
    caption: Text,
}

message.client.sendMessage(message.jid, buttonMessage, { quoted: message })

})
