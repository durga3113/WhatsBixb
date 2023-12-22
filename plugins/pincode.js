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
 
const _0x4e32b1=_0x5f4b;function _0x5f4b(_0x3effa7,_0x45ea30){const _0x54bf0c=_0x54bf();return _0x5f4b=function(_0x5f4b2e,_0x32093a){_0x5f4b2e=_0x5f4b2e-0x190;let _0x34046e=_0x54bf0c[_0x5f4b2e];return _0x34046e;},_0x5f4b(_0x3effa7,_0x45ea30);}(function(_0x3bd21a,_0x29d897){const _0x4edd21=_0x5f4b,_0x50331d=_0x3bd21a();while(!![]){try{const _0x58a959=parseInt(_0x4edd21(0x19b))/0x1*(-parseInt(_0x4edd21(0x19c))/0x2)+parseInt(_0x4edd21(0x19e))/0x3*(parseInt(_0x4edd21(0x196))/0x4)+parseInt(_0x4edd21(0x19f))/0x5+parseInt(_0x4edd21(0x1a8))/0x6*(-parseInt(_0x4edd21(0x1a7))/0x7)+parseInt(_0x4edd21(0x194))/0x8+-parseInt(_0x4edd21(0x1a2))/0x9*(-parseInt(_0x4edd21(0x193))/0xa)+-parseInt(_0x4edd21(0x1a6))/0xb*(parseInt(_0x4edd21(0x198))/0xc);if(_0x58a959===_0x29d897)break;else _0x50331d['push'](_0x50331d['shift']());}catch(_0x437230){_0x50331d['push'](_0x50331d['shift']());}}}(_0x54bf,0x507a8));const data=response[_0x4e32b1(0x192)]['result'];if(data&&data[_0x4e32b1(0x1a4)]>0x0&&data[0x0][_0x4e32b1(0x1a9)]){const postOffices=data[0x0]['PostOffice'],postdata=postOffices['map']((_0x2cf731,_0x91d8)=>'Post\x20Office\x20'+(_0x91d8+0x1)+_0x4e32b1(0x197)+_0x2cf731[_0x4e32b1(0x195)]+_0x4e32b1(0x1a1)+_0x2cf731['BranchType']+_0x4e32b1(0x19d)+_0x2cf731[_0x4e32b1(0x1a5)]+_0x4e32b1(0x191)+_0x2cf731[_0x4e32b1(0x190)]+_0x4e32b1(0x1a0)+_0x2cf731[_0x4e32b1(0x199)]+_0x4e32b1(0x1a3))[_0x4e32b1(0x19a)]('\x0a');}function _0x54bf(){const _0x42ec7b=['DeliveryStatus','3158639ibppwH','2217726IccDSL','6thIKoX','PostOffice','District','\x0a\x20\x20District:\x20','data','891340vVZmtO','2592344USGMqq','Name','1376468YIHfde',':\x0a\x20\x20Name:\x20','12BqFSUe','State','join','51001xpdWke','18mMQmEW','\x0a\x20\x20Delivery\x20Status:\x20','3FAHeFA','948260ZPvTbX','\x0a\x20\x20State:\x20','\x0a\x20\x20Branch\x20Type:\x20','54XReikp','\x0a------------------------','length'];_0x54bf=function(){return _0x42ec7b;};return _0x54bf();}
           
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
