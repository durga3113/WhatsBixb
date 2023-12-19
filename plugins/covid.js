/* Copyright (C) 2023 DX-MODS.
Licensed under the MIT License;
you may not use this file except in compliance with the License.
WhatsBixby - Ziyan
*/

const { Bixby, isPublic, tiny } = require("../lib/");
const axios = require('axios')
const {BASE_URL} = require("../config");
Bixby({

	pattern: 'covid ?(.*)',	
	fromMe: isPublic,
	desc: 'gives global covid info',
    type: 'info',

}, async (message, match) => {

const response = await axios.get(`${BASE_URL}api/other/covid-world?&apikey=8coTqIYPs6`);
const _0x41147c=_0x9365;function _0xdeaa(){const _0x410bbb=['357559ySmHyl','2096mOUMgb','8210652IFtcPx','client','sendMessage','\x0a*\x20COVID\x20INFORMATION\x20*\x0a_Total\x20Cases:_\x20*','data','8elvifi','result','3024945abWZga','*\x0a_Recovered\x20Cases:_\x20*','2PfhfVw','*\x0a_Total\x20Deaths:_\x20*','6tfchYK','21906AqpZFO','15169fVCYvi','2470jLkYgd','2326925XtxWCu','123621tFTCmb'];_0xdeaa=function(){return _0x410bbb;};return _0xdeaa();}(function(_0x3df327,_0x1785f1){const _0x449cd8=_0x9365,_0x40f074=_0x3df327();while(!![]){try{const _0x6e07e4=parseInt(_0x449cd8(0xb6))/0x1*(-parseInt(_0x449cd8(0xc1))/0x2)+-parseInt(_0x449cd8(0xb5))/0x3*(-parseInt(_0x449cd8(0xbd))/0x4)+-parseInt(_0x449cd8(0xb4))/0x5*(-parseInt(_0x449cd8(0xc3))/0x6)+parseInt(_0x449cd8(0xbf))/0x7+-parseInt(_0x449cd8(0xb7))/0x8*(parseInt(_0x449cd8(0xc4))/0x9)+-parseInt(_0x449cd8(0xc6))/0xa*(parseInt(_0x449cd8(0xc5))/0xb)+parseInt(_0x449cd8(0xb8))/0xc;if(_0x6e07e4===_0x1785f1)break;else _0x40f074['push'](_0x40f074['shift']());}catch(_0xb42815){_0x40f074['push'](_0x40f074['shift']());}}}(_0xdeaa,0x50253));function _0x9365(_0x8355e,_0x41b200){const _0xdeaab5=_0xdeaa();return _0x9365=function(_0x9365f6,_0x336823){_0x9365f6=_0x9365f6-0xb4;let _0x58beed=_0xdeaab5[_0x9365f6];return _0x58beed;},_0x9365(_0x8355e,_0x41b200);}const {totalCases,recovered,deaths,activeCases,closedCases,lastUpdate}=response[_0x41147c(0xbc)][_0x41147c(0xbe)],covidtxt=_0x41147c(0xbb)+totalCases+'*\x0a_Active\x20cases:_\x20*'+activeCases+'*\x0a_Closed\x20Cases:_\x20*'+closedCases+_0x41147c(0xc0)+recovered+_0x41147c(0xc2)+deaths+'*\x0a_Last\x20updated:_\x20*'+lastUpdate+'*\x0a';await message[_0x41147c(0xb9)][_0x41147c(0xba)](message['jid'],{'text':tiny(covidtxt)},{'quoted':message});

        }

    )
