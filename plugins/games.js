const { Bixby, isPublic, parseJid } = require("../lib");
const axios = require("axios");

Bixby(
  {
    pattern: "ttt",
    fromMe: isPublic,
    desc: "Play TicTacToe",
    type: "game",
  },
  async (message, match, m) => {
    let {prefix} = message
    {
      let TicTacToe = require("../lib/tictactoe");
      this.game = this.game ? this.game : {};
      if (
        Object.values(this.game).find(
          (room) =>
            room.id.startsWith("tictactoe") &&
            [room.game.playerX, room.game.playerO].includes(m.sender)
        )
      )
        return message.reply("_You're still in the game_");
      let room = Object.values(this.game).find(
        (room) =>
          room.state === "WAITING" && (match ? room.name === match : true)
      );
      if (room) {
        room.o = message.jid;
        room.game.playerO = message.participant || message.mention[0];
        room.state = "PLAYING";
        let arr = room.game.render().map((v) => {
          return {
            X: "❌",
            O: "⭕",
            1: "1️⃣",
            2: "2️⃣",
            3: "3️⃣",
            4: "4️⃣",
            5: "5️⃣",
            6: "6️⃣",
            7: "7️⃣",
            8: "8️⃣",
            9: "9️⃣", 
          }[v];
        });
        let str = `Room ID: ${room.id}

${arr.slice(0, 3).join("")}
${arr.slice(3, 6).join("")}
${arr.slice(6).join("")}

Current turn: @${room.game.currentTurn.split("@")[0]}
`;

        return await message.client.sendMessage(message.jid, {
          text: str,
          buttons: [
            { buttonId: "give_up", buttonText: { displayText: "Give UP" } },
          ],
          mentions: parseJid(str),
        });
      } else {
        room = {
          id: "tictactoe-" + +new Date(),
          x: message.jid,
          o: "",
          game: new TicTacToe(m.sender, "o"),
          state: "WAITING",
        };
        if (match) room.name = match;
        message.reply("_Waiting for partner_ ");
        this.game[room.id] = room;
      }
    }
  }
);

Bixby(
  {
    on: "text",
    fromMe: isPublic,
  },
  async (message, match, m) => {
    let {prefix} = message
    this.game = this.game ? this.game : {};
    let room = Object.values(this.game).find(
      (room) =>
        room.id &&
        room.game &&
        room.state &&
        room.id.startsWith("tictactoe") &&
        [room.game.playerX, room.game.playerO].includes(m.sender) &&
        room.state == "PLAYING"
    );
    if (room) {
      let ok;
      let isWin = !1;
      let isTie = !1;
      let isSurrender = !1;
      
      if (!/^([1-9]|(me)?give_up|surr?ender|off|skip)$/i.test(match)) return;
      isSurrender = !/^[1-9]$/.test(match);
      if (m.sender !== room.game.currentTurn) {
        if (!isSurrender) return !0;
      }
      if (
        !isSurrender &&
        1 >
          (ok = room.game.turn(
            m.sender === room.game.playerO,
            parseInt(match) - 1
          ))
      ) {
        message.reply(
          {
            "-3": "The game is over",
            "-2": "Invalid",
            "-1": "_Invalid Position_",
            0: "_Invalid Position_",
          }[ok]
        );
        return !0;
      }
      if (m.sender === room.game.winner) isWin = true;
      else if (room.game.board === 511) isTie = true;
      let arr = room.game.render().map((v) => {
        return {
          X: "❌",
          O: "⭕",
          1: "1️⃣",
          2: "2️⃣",
          3: "3️⃣",
          4: "4️⃣",
          5: "5️⃣",
          6: "6️⃣",
          7: "7️⃣",
          8: "8️⃣",
          9: "9️⃣",
        }[v];
      });
      if (isSurrender) {
        room.game._currentTurn = m.sender === room.game.playerX;
        isWin = true;
      }
      let winner = isSurrender ? room.game.currentTurn : room.game.winner;
      let str = `Room ID: ${room.id}

${arr.slice(0, 3).join("")}
${arr.slice(3, 6).join("")}
${arr.slice(6).join("")}

${
  isWin
    ? `@${winner.split("@")[0]} Won !`
    : isTie
    ? `Tie`
    : `Current Turn ${["❌", "⭕"][1 * room.game._currentTurn]} @${
        room.game.currentTurn.split("@")[0]
      }`
}
❌: @${room.game.playerX.split("@")[0]}
⭕: @${room.game.playerO.split("@")[0]}`;

      if ((room.game._currentTurn ^ isSurrender ? room.x : room.o) !== m.chat)
        room[room.game._currentTurn ^ isSurrender ? "x" : "o"] = m.chat;
      if (isWin || isTie) {
        await message.client.sendMessage(message.jid, {
          text: str,
          buttons: [
            {
              buttonId: `${prefix}ttt`,
              buttonText: { displayText: "Play again" },
            },
          ],
          mentions: parseJid(str),
        });
      } else {
        await message.client.sendMessage(message.jid, {
          text: str,
          buttons: [
            { buttonId: "give_up", buttonText: { displayText: "Give UP" } },
          ],
          mentions: parseJid(str),
        });
      }
      if (isTie || isWin) {
        delete this.game[room.id];
      }
    }
  }
);
    

let triviaGames = {};

Bixby(
  {
    pattern: "trivia",
    fromMe: isPublic,
    desc: "Start a trivia game.",
    type: "game",
  },
  async (message, match, m) => {
    const userId = message.sender;

    if (triviaGames[userId]) {
      return message.reply("You already have a trivia game in progress.");
    }

    const triviaQuestion = await fetchTriviaQuestion();

    triviaGames[userId] = {
      currentQuestion: triviaQuestion,
      correctAnswers: 0,
      initiator: userId,
      chatId: message.key.remoteJid,
    };

    return sendTriviaQuestion(message, userId);
  }
);

const _0x598c72=_0x1d18;function _0x5b30(){const _0x10edf1=['initiator','key','currentQuestion','96424hWPPYp','999186MZJSxi','109004dYmdve','chatId','remoteJid','59378sUjQFu','643563wFYAsQ','text','686710qyQaZW','trim','2621143vADmjh','112zGnvib','correctAnswer','reply','Correct\x20answer\x20\x0a\x0a\x20Your\x20Points\x20:\x20','correctAnswers','51JqVmvq','sender','Incorrect\x20answer.\x20The\x20correct\x20answer\x20is\x20option\x20'];_0x5b30=function(){return _0x10edf1;};return _0x5b30();}function _0x1d18(_0x3fab65,_0x193b97){const _0x5b30f0=_0x5b30();return _0x1d18=function(_0x1d189c,_0x404ef7){_0x1d189c=_0x1d189c-0x111;let _0x4719a1=_0x5b30f0[_0x1d189c];return _0x4719a1;},_0x1d18(_0x3fab65,_0x193b97);}(function(_0x4f42b3,_0x19835c){const _0x2f3303=_0x1d18,_0x2f5109=_0x4f42b3();while(!![]){try{const _0x4e5dcd=parseInt(_0x2f3303(0x111))/0x1+-parseInt(_0x2f3303(0x114))/0x2*(-parseInt(_0x2f3303(0x11f))/0x3)+-parseInt(_0x2f3303(0x125))/0x4+parseInt(_0x2f3303(0x117))/0x5+parseInt(_0x2f3303(0x126))/0x6+parseInt(_0x2f3303(0x119))/0x7+parseInt(_0x2f3303(0x11a))/0x8*(-parseInt(_0x2f3303(0x115))/0x9);if(_0x4e5dcd===_0x19835c)break;else _0x2f5109['push'](_0x2f5109['shift']());}catch(_0x163c6c){_0x2f5109['push'](_0x2f5109['shift']());}}}(_0x5b30,0x41253),Bixby({'on':_0x598c72(0x116),'fromMe':isPublic,'pattern':![],'dontAddCommandList':!![]},async(_0x41510d,_0x2eb0a9,_0x2eb694)=>{const _0xd3a19f=_0x598c72,_0x13bbb6=_0x41510d[_0xd3a19f(0x120)];if(triviaGames[_0x13bbb6]){const _0x24efc9=triviaGames[_0x13bbb6],_0x507232=_0x41510d[_0xd3a19f(0x116)]?_0x41510d[_0xd3a19f(0x116)][_0xd3a19f(0x118)]():'';if(_0x13bbb6===_0x24efc9[_0xd3a19f(0x122)]&&_0x41510d[_0xd3a19f(0x123)][_0xd3a19f(0x113)]===_0x24efc9[_0xd3a19f(0x112)]){if(isOptionNumber(_0x507232)){const _0x5c9341=parseInt(_0x507232),_0x2a4f22=_0x24efc9[_0xd3a19f(0x124)]['options']['indexOf'](_0x24efc9[_0xd3a19f(0x124)][_0xd3a19f(0x11b)])+0x1;return _0x5c9341===_0x2a4f22?(_0x24efc9[_0xd3a19f(0x11e)]++,_0x41510d[_0xd3a19f(0x11c)](_0xd3a19f(0x11d)+_0x24efc9[_0xd3a19f(0x11e)]),_0x24efc9['currentQuestion']=await fetchTriviaQuestion(),sendTriviaQuestion(_0x41510d,_0x13bbb6)):(_0x41510d['reply'](_0xd3a19f(0x121)+_0x2a4f22+'\x20'+_0x24efc9['currentQuestion'][_0xd3a19f(0x11b)]+'.'),await endTriviaGame(_0x41510d,_0x13bbb6));}}}}));

(function(_0x59a01e,_0x130a12){const _0x30f1f2=_0x41f7,_0x51694b=_0x59a01e();while(!![]){try{const _0x3e9084=parseInt(_0x30f1f2(0x17e))/0x1*(parseInt(_0x30f1f2(0x184))/0x2)+parseInt(_0x30f1f2(0x17f))/0x3+parseInt(_0x30f1f2(0x183))/0x4+-parseInt(_0x30f1f2(0x185))/0x5+-parseInt(_0x30f1f2(0x182))/0x6*(parseInt(_0x30f1f2(0x180))/0x7)+-parseInt(_0x30f1f2(0x181))/0x8+parseInt(_0x30f1f2(0x17d))/0x9;if(_0x3e9084===_0x130a12)break;else _0x51694b['push'](_0x51694b['shift']());}catch(_0x1077a0){_0x51694b['push'](_0x51694b['shift']());}}}(_0x4c2a,0x4b190));function _0x41f7(_0x1e8c40,_0xa0f219){const _0x4c2a3d=_0x4c2a();return _0x41f7=function(_0x41f730,_0x2cf287){_0x41f730=_0x41f730-0x17d;let _0x3c6ecb=_0x4c2a3d[_0x41f730];return _0x3c6ecb;},_0x41f7(_0x1e8c40,_0xa0f219);}function _0x4c2a(){const _0x2cd508=['9484038tlVbee','89bWBHYm','374259anyWPa','971453DvYngs','4880336OZhJaR','18RnCdYZ','1162704ZSUZZU','3866jlzgZM','1536345TwWPaz'];_0x4c2a=function(){return _0x2cd508;};return _0x4c2a();}function isOptionNumber(_0x4a2793){const _0x26b232=parseInt(_0x4a2793);return!isNaN(_0x26b232)&&_0x4a2793['length']===0x1&&_0x26b232>=0x1&&_0x26b232<=0x4;}

(function(_0x5a745c,_0x212008){const _0x512e35=_0x3e6b,_0x1fd1b7=_0x5a745c();while(!![]){try{const _0x47c68c=parseInt(_0x512e35(0x126))/0x1+-parseInt(_0x512e35(0x131))/0x2*(-parseInt(_0x512e35(0x122))/0x3)+parseInt(_0x512e35(0x12c))/0x4*(parseInt(_0x512e35(0x129))/0x5)+-parseInt(_0x512e35(0x12e))/0x6+-parseInt(_0x512e35(0x127))/0x7+parseInt(_0x512e35(0x12d))/0x8+parseInt(_0x512e35(0x132))/0x9*(-parseInt(_0x512e35(0x128))/0xa);if(_0x47c68c===_0x212008)break;else _0x1fd1b7['push'](_0x1fd1b7['shift']());}catch(_0xe65c1d){_0x1fd1b7['push'](_0x1fd1b7['shift']());}}}(_0x29fd,0x43d5a));function _0x3e6b(_0x28e3a1,_0x328499){const _0x29fd0d=_0x29fd();return _0x3e6b=function(_0x3e6bfc,_0x2102da){_0x3e6bfc=_0x3e6bfc-0x120;let _0x5f0f0b=_0x29fd0d[_0x3e6bfc];return _0x5f0f0b;},_0x3e6b(_0x28e3a1,_0x328499);}async function fetchTriviaQuestion(){const _0xcb2237=_0x3e6b;try{const _0x5e1ef8=await axios[_0xcb2237(0x123)]('https://the-trivia-api.com/v2/questions'),_0xea72d6=_0x5e1ef8['data'],_0x13d6b4=_0xea72d6[Math[_0xcb2237(0x12f)](Math[_0xcb2237(0x121)]()*_0xea72d6[_0xcb2237(0x125)])],_0x4f05cd=[..._0x13d6b4['incorrectAnswers'],_0x13d6b4[_0xcb2237(0x124)]];for(let _0x293142=_0x4f05cd[_0xcb2237(0x125)]-0x1;_0x293142>0x0;_0x293142--){const _0x5ac8ac=Math[_0xcb2237(0x12f)](Math['random']()*(_0x293142+0x1));[_0x4f05cd[_0x293142],_0x4f05cd[_0x5ac8ac]]=[_0x4f05cd[_0x5ac8ac],_0x4f05cd[_0x293142]];}const _0x49d579={'text':_0x13d6b4[_0xcb2237(0x12b)][_0xcb2237(0x12a)],'options':_0x4f05cd,'correctAnswer':_0x13d6b4[_0xcb2237(0x124)]};return _0x49d579;}catch(_0x1b36b0){console[_0xcb2237(0x130)]('Error\x20fetching\x20trivia\x20question:',_0x1b36b0[_0xcb2237(0x120)]);throw _0x1b36b0;}}function _0x29fd(){const _0x4a6128=['length','429218cJrOXc','1031800yRePXW','471530puBkzz','15PvwBGb','text','question','452436qfypqR','579208mUCQAR','2635122ruDQoq','floor','error','2ZVtMxe','18jLZTJX','message','random','353391YbXLYb','get','correctAnswer'];_0x29fd=function(){return _0x4a6128;};return _0x29fd();}

(function(_0x2d8462,_0x51e02c){const _0x201e0f=_0x288a,_0x52aa82=_0x2d8462();while(!![]){try{const _0x1860de=-parseInt(_0x201e0f(0xbf))/0x1*(-parseInt(_0x201e0f(0xb9))/0x2)+-parseInt(_0x201e0f(0xc5))/0x3+-parseInt(_0x201e0f(0xbd))/0x4*(parseInt(_0x201e0f(0xba))/0x5)+parseInt(_0x201e0f(0xb8))/0x6*(-parseInt(_0x201e0f(0xc0))/0x7)+parseInt(_0x201e0f(0xbe))/0x8+-parseInt(_0x201e0f(0xc3))/0x9+-parseInt(_0x201e0f(0xc4))/0xa*(-parseInt(_0x201e0f(0xbc))/0xb);if(_0x1860de===_0x51e02c)break;else _0x52aa82['push'](_0x52aa82['shift']());}catch(_0x56fa91){_0x52aa82['push'](_0x52aa82['shift']());}}}(_0x1a77,0x2b0ba));function sendTriviaQuestion(_0x161baf,_0x7b8093){const _0x4ecb8=_0x288a,_0x3c83a3=triviaGames[_0x7b8093],_0x2759eb=_0x3c83a3[_0x4ecb8(0xc2)],_0x34c22f=_0x2759eb['options']['map']((_0x57a1e9,_0x12be18)=>_0x12be18+0x1+'.\x20'+_0x57a1e9)['join']('\x0a');_0x161baf['reply'](_0x4ecb8(0xc1)+_0x2759eb[_0x4ecb8(0xbb)]+'\x0aOptions:\x0a'+_0x34c22f);}function _0x288a(_0x2742f,_0x4e169a){const _0x1a77d4=_0x1a77();return _0x288a=function(_0x288a5a,_0x2d64d1){_0x288a5a=_0x288a5a-0xb8;let _0x13e353=_0x1a77d4[_0x288a5a];return _0x13e353;},_0x288a(_0x2742f,_0x4e169a);}function _0x1a77(){const _0x5b9123=['813789ljwHKG','580HnBVLK','539646ZsSJTG','2790WyhsZl','95306qJJsrs','15795czjJdH','text','47927ieFxoj','36Pujdvg','231672mTgQfW','6EgOXii','1393GXjmWq','Question:\x20','currentQuestion'];_0x1a77=function(){return _0x5b9123;};return _0x1a77();}

(function(_0x2682ef,_0x4bbaef){const _0x91c4b6=_0x303d,_0x447311=_0x2682ef();while(!![]){try{const _0x3405dc=parseInt(_0x91c4b6(0x193))/0x1*(-parseInt(_0x91c4b6(0x188))/0x2)+-parseInt(_0x91c4b6(0x18c))/0x3*(parseInt(_0x91c4b6(0x18f))/0x4)+parseInt(_0x91c4b6(0x190))/0x5*(parseInt(_0x91c4b6(0x194))/0x6)+parseInt(_0x91c4b6(0x189))/0x7*(parseInt(_0x91c4b6(0x18a))/0x8)+-parseInt(_0x91c4b6(0x191))/0x9*(parseInt(_0x91c4b6(0x192))/0xa)+parseInt(_0x91c4b6(0x18e))/0xb*(parseInt(_0x91c4b6(0x18b))/0xc)+parseInt(_0x91c4b6(0x195))/0xd;if(_0x3405dc===_0x4bbaef)break;else _0x447311['push'](_0x447311['shift']());}catch(_0x4119e5){_0x447311['push'](_0x447311['shift']());}}}(_0xf80d,0x2942b));function _0xf80d(){const _0x5a2030=['4147065FTybHd','correctAnswers','1988FaUdJt','7JjFNRv','1409784tSdhyL','117336ttMwkt','3183Rwzrcb','reply','44dNHFCe','852aptAXq','1070xeygNI','243603YkKRhC','80pPSdCv','216AWOWNZ','8184SEEOYU'];_0xf80d=function(){return _0x5a2030;};return _0xf80d();}function _0x303d(_0xcd41a4,_0x342808){const _0xf80d00=_0xf80d();return _0x303d=function(_0x303d63,_0xe83965){_0x303d63=_0x303d63-0x188;let _0x5921fb=_0xf80d00[_0x303d63];return _0x5921fb;},_0x303d(_0xcd41a4,_0x342808);}async function endTriviaGame(_0x1b108a,_0x3c3ce2){const _0x1ebef0=_0x303d,_0x122a43=triviaGames[_0x3c3ce2];await _0x1b108a[_0x1ebef0(0x18d)]('Trivia\x20game\x20ended.\x20You\x20answered\x20'+_0x122a43[_0x1ebef0(0x196)]+'\x20questions\x20correctly.'),delete triviaGames[_0x3c3ce2];}
