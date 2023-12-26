/* Copyright (C) 2023 DX-MODS.
Licensed under the MIT License;
you may not use this file except in compliance with the License.
WhatsBixby - Ziyan
*/

const { Bixby, isPublic } = require("../lib");
Bixby(
  {
    pattern: "request ?(.*)",
    fromMe: isPublic,
    desc: "request something to dev",
    type: "misc",
  },
  async (message, match) => {
    if (!match) {
        await message.reply(".request and any feature u need or any bugs");
        return;
    }
    (function(_0x5474ea,_0x6b0f06){function _0x100b18(_0xab1719,_0x204a9a){return _0xbc4b(_0xab1719- -0x311,_0x204a9a);}const _0x368d6a=_0x5474ea();while(!![]){try{const _0x134130=parseInt(_0x100b18(-0x1c2,-0x1c3))/0x1*(parseInt(_0x100b18(-0x1c4,-0x1bc))/0x2)+parseInt(_0x100b18(-0x1c3,-0x1c9))/0x3+parseInt(_0x100b18(-0x1b8,-0x1be))/0x4*(-parseInt(_0x100b18(-0x1bc,-0x1c2))/0x5)+parseInt(_0x100b18(-0x1c1,-0x1bb))/0x6+-parseInt(_0x100b18(-0x1c6,-0x1be))/0x7+-parseInt(_0x100b18(-0x1b7,-0x1bb))/0x8*(parseInt(_0x100b18(-0x1bf,-0x1c5))/0x9)+parseInt(_0x100b18(-0x1b9,-0x1bb))/0xa*(parseInt(_0x100b18(-0x1c0,-0x1bd))/0xb);if(_0x134130===_0x6b0f06)break;else _0x368d6a['push'](_0x368d6a['shift']());}catch(_0x425a1a){_0x368d6a['push'](_0x368d6a['shift']());}}}(_0x527f,0xc3b3e));const developerNumber=_0x4bef6d(-0x23b,-0x238),requestMessage='*Request\x20from\x20'+message['jid']+'*\x0a\x0a'+match;await message[_0x4bef6d(-0x242,-0x240)][_0x4bef6d(-0x23a,-0x242)](developerNumber+_0x4bef6d(-0x231,-0x236),{'text':requestMessage},{'quoted':message});function _0x527f(){const _0x35237b=['client','3268pQAhSA','3808968tdtpQN','134QeLjbX','7159626jlJBQQ','9506057mahZrG','654633EZiHzC','reply','919446072492','5050885xSZWaM','@s.whatsapp.net','Your\x20request\x20has\x20been\x20sent\x20to\x20the\x20WhatsBixby\x20developer.\x20thanks!','10rxfAZT','4ehzGZU','88ojHhEQ','sendMessage','6539316YMHeaj'];_0x527f=function(){return _0x35237b;};return _0x527f();}function _0x4bef6d(_0x4c2c3c,_0x4fbf2c){return _0xbc4b(_0x4fbf2c- -0x38c,_0x4c2c3c);}function _0xbc4b(_0x4242c1,_0x4733ba){const _0x527f23=_0x527f();return _0xbc4b=function(_0xbc4b79,_0x40f5c6){_0xbc4b79=_0xbc4b79-0x14a;let _0x35bf44=_0x527f23[_0xbc4b79];return _0x35bf44;},_0xbc4b(_0x4242c1,_0x4733ba);}await message[_0x4bef6d(-0x23c,-0x239)](_0x4bef6d(-0x23c,-0x235));
});
