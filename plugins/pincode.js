/* Copyright (C) 2023 DX-MODS.
Licensed under the MIT License;
you may not use this file except in compliance with the License.
WhatsBixby - Ziyan
*/

const { Bixby, isPublic } = require("../lib/");
const axios = require('axiox')
const { BASE_URL } = require("../config");

Bixby({
    pattern: 'pincode ?(.*)',
    fromMe: isPublic,
    desc: 'get pincode details',
    type: 'search',
}, async (message, match) => {
    match = match || message.reply_message.text;
    if (!match) return await message.reply("*_Give me any pincode*");

    const response = await axios.get(`${BASE_URL}api/other/pincode?pincode=${match}&apikey=8coTqIYPs6`);
    
    const _0x1c703b=_0x178a;(function(_0x434376,_0xef1279){const _0x50c13c=_0x178a,_0x958e42=_0x434376();while(!![]){try{const _0x433f32=parseInt(_0x50c13c(0xa6))/0x1*(parseInt(_0x50c13c(0xa5))/0x2)+parseInt(_0x50c13c(0x96))/0x3+-parseInt(_0x50c13c(0x95))/0x4*(-parseInt(_0x50c13c(0xa1))/0x5)+-parseInt(_0x50c13c(0x9a))/0x6*(-parseInt(_0x50c13c(0x92))/0x7)+-parseInt(_0x50c13c(0xa7))/0x8*(parseInt(_0x50c13c(0x9d))/0x9)+parseInt(_0x50c13c(0x9c))/0xa*(-parseInt(_0x50c13c(0xa3))/0xb)+parseInt(_0x50c13c(0xa4))/0xc*(-parseInt(_0x50c13c(0xa2))/0xd);if(_0x433f32===_0xef1279)break;else _0x958e42['push'](_0x958e42['shift']());}catch(_0x5aabd0){_0x958e42['push'](_0x958e42['shift']());}}}(_0x18d1,0x235fd),pincodeimg=_0x1c703b(0xaa));function _0x178a(_0x1b6f47,_0x3affac){const _0x18d1ba=_0x18d1();return _0x178a=function(_0x178a3d,_0x3db3df){_0x178a3d=_0x178a3d-0x92;let _0xc87c43=_0x18d1ba[_0x178a3d];return _0xc87c43;},_0x178a(_0x1b6f47,_0x3affac);}function _0x18d1(){const _0x43a9b5=['1044SHPfnX','46KmjOxx','2683sdPqTI','200qRJkGd','join','\x0a------------------------','https://graph.org/file/31817366c5e2557a595d9.jpg','\x0a\x20\x20Delivery\x20Status:\x20','1608775RKLDbU','data','\x0a\x20\x20Branch\x20Type:\x20','4EyTJnh','868020BjiGUI','DeliveryStatus','Post\x20Office\x20','map','6emJlAZ','PostOffice','17620PVfnHI','6345GYMpgn','length',':\x0a\x20\x20Name:\x20','Name','178845BaqVJU','37843OdObLl','1254ZtetjX'];_0x18d1=function(){return _0x43a9b5;};return _0x18d1();}const data=response[_0x1c703b(0x93)]['result'];if(data&&data[_0x1c703b(0x9e)]>0x0&&data[0x0][_0x1c703b(0x9b)]){const postOffices=data[0x0]['PostOffice'];postdata=postOffices[_0x1c703b(0x99)]((_0x5eec43,_0xdebdda)=>_0x1c703b(0x98)+(_0xdebdda+0x1)+_0x1c703b(0x9f)+_0x5eec43[_0x1c703b(0xa0)]+_0x1c703b(0x94)+_0x5eec43['BranchType']+_0x1c703b(0xab)+_0x5eec43[_0x1c703b(0x97)]+'\x0a\x20\x20District:\x20'+_0x5eec43['District']+'\x0a\x20\x20State:\x20'+_0x5eec43['State']+_0x1c703b(0xa9))[_0x1c703b(0xa8)]('\x0a');}

    await message.client.sendMessage(message.jid, {
        image: {
            url: pincodeimg,
        },
        caption: postdata || "No pincode data found",
    }, {
        quoted: message,
    });
});
