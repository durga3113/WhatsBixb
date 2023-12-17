const { Bixby, isPublic, getJson } = require("../lib");

Bixby(
  {
    pattern: "joke",
    fromMe: isPublic,
    desc: "Fetch a random joke",
    type: "misc",
  },
  async (message) => {
    const _0x407be1=_0x558d;function _0x2b67(){const _0x1c4a3b=['Error\x20fetching\x20joke:','https://v2.jokeapi.dev/joke/Any?type=twopart','1561892BiUhsU','3581520bVUzrr','888717HBOTGb','4490392KQabUM','2560341EvabSV','reply','Failed\x20to\x20fetch\x20a\x20joke.\x20Please\x20try\x20again\x20later.','error','sendMessage','1345216ydMiiL','setup','197880gmMqoV','49TvFhtd'];_0x2b67=function(){return _0x1c4a3b;};return _0x2b67();}function _0x558d(_0x609ebe,_0x57fec9){const _0x2b6787=_0x2b67();return _0x558d=function(_0x558dfc,_0x1d91ed){_0x558dfc=_0x558dfc-0x1a9;let _0xc492cc=_0x2b6787[_0x558dfc];return _0xc492cc;},_0x558d(_0x609ebe,_0x57fec9);}(function(_0xa86d13,_0x2723a9){const _0x22891f=_0x558d,_0x3d6f05=_0xa86d13();while(!![]){try{const _0x57976a=parseInt(_0x22891f(0x1b4))/0x1+-parseInt(_0x22891f(0x1b2))/0x2+-parseInt(_0x22891f(0x1b6))/0x3+parseInt(_0x22891f(0x1b5))/0x4+parseInt(_0x22891f(0x1ae))/0x5+-parseInt(_0x22891f(0x1b3))/0x6+parseInt(_0x22891f(0x1af))/0x7*(parseInt(_0x22891f(0x1ac))/0x8);if(_0x57976a===_0x2723a9)break;else _0x3d6f05['push'](_0x3d6f05['shift']());}catch(_0xe5f57e){_0x3d6f05['push'](_0x3d6f05['shift']());}}}(_0x2b67,0xf3522));try{const jokeData=await getJson(_0x407be1(0x1b1));if(jokeData&&!jokeData[_0x407be1(0x1aa)]){const jokeMessage=jokeData[_0x407be1(0x1ad)]+'\x0a'+jokeData['delivery'];message[_0x407be1(0x1ab)](jokeMessage);}else console[_0x407be1(0x1aa)]('Error\x20fetching\x20joke:',jokeData),message[_0x407be1(0x1b7)](_0x407be1(0x1a9));}catch(_0x53ae03){console['error'](_0x407be1(0x1b0),_0x53ae03),message[_0x407be1(0x1b7)](_0x407be1(0x1a9));}
  }
);
