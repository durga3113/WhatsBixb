const { Bixby, isPublic } = require("../lib/");
const axios = require('axios')
const { BASE_URL} = require("../config");
const { bixbybuffer } = require("bixby-md");

Bixby({
	pattern: 'pincode ?(.*)',	
	fromMe: isPublic,
	desc: 'get pincode details',
    type: 'search',

}, async (message, match) => {
match = match || message.reply_message.text;
 if (!match) return await message.reply("*_Give me any pincode*");
 pincodeimg = "https://graph.org/file/31817366c5e2557a595d9.jpg";
 pincodeimg1 = await bixbybuffer(pincodeimg)
const response = await axios.get(`${BASE_URL}api/other/pincode?pincode=${match}&apikey=8coTqIYPs6`
       );
const _0x1aad5b=_0x16f5;function _0x16f5(_0x57acf0,_0x51c5f7){const _0x1c8ce7=_0x1c8c();return _0x16f5=function(_0x16f508,_0x1b1ac8){_0x16f508=_0x16f508-0x10c;let _0x26fd4f=_0x1c8ce7[_0x16f508];return _0x26fd4f;},_0x16f5(_0x57acf0,_0x51c5f7);}(function(_0x193e73,_0x25c9ec){const _0x5ca25f=_0x16f5,_0x34b676=_0x193e73();while(!![]){try{const _0x2c20e7=parseInt(_0x5ca25f(0x11a))/0x1*(-parseInt(_0x5ca25f(0x120))/0x2)+-parseInt(_0x5ca25f(0x122))/0x3+parseInt(_0x5ca25f(0x125))/0x4*(-parseInt(_0x5ca25f(0x10c))/0x5)+parseInt(_0x5ca25f(0x121))/0x6*(-parseInt(_0x5ca25f(0x123))/0x7)+parseInt(_0x5ca25f(0x11b))/0x8*(parseInt(_0x5ca25f(0x114))/0x9)+parseInt(_0x5ca25f(0x10d))/0xa+parseInt(_0x5ca25f(0x113))/0xb*(parseInt(_0x5ca25f(0x112))/0xc);if(_0x2c20e7===_0x25c9ec)break;else _0x34b676['push'](_0x34b676['shift']());}catch(_0x3bb0de){_0x34b676['push'](_0x34b676['shift']());}}}(_0x1c8c,0xcac63));const data=response[_0x1aad5b(0x10f)][_0x1aad5b(0x110)];if(data&&data[_0x1aad5b(0x10e)]>0x0&&data[0x0][_0x1aad5b(0x115)]){const postOffices=data[0x0]['PostOffice'],postdata=postOffices[_0x1aad5b(0x11f)]((_0x482067,_0x44f05c)=>_0x1aad5b(0x119)+(_0x44f05c+0x1)+_0x1aad5b(0x116)+_0x482067[_0x1aad5b(0x124)]+_0x1aad5b(0x11c)+_0x482067[_0x1aad5b(0x118)]+'\x0a\x20\x20Delivery\x20Status:\x20'+_0x482067['DeliveryStatus']+_0x1aad5b(0x11d)+_0x482067[_0x1aad5b(0x11e)]+_0x1aad5b(0x111)+_0x482067[_0x1aad5b(0x117)]+'\x0a------------------------')['join']('\x0a');}function _0x1c8c(){const _0x1a86cb=['4902348rYbrGC','175NCIFyE','Name','16EkqBzV','1110570McMmaU','4625520fmEhXg','length','data','result','\x0a\x20\x20State:\x20','44454636RKChBp','11JHgOTc','9GEunXs','PostOffice',':\x0a\x20\x20Name:\x20','State','BranchType','Post\x20Office\x20','19FhbwKt','10290144PDmzME','\x0a\x20\x20Branch\x20Type:\x20','\x0a\x20\x20District:\x20','District','map','121954ZHKXMu','226002OksfGl'];_0x1c8c=function(){return _0x1a86cb;};return _0x1c8c();}
	
            await message.client.sendMessage(message.jid, {

                image: {

                    url: pincodeimg1,

                },

                caption: postdata,

            }, {

                quoted: message,

            });

        }

    )
