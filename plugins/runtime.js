const { Bixby, isPrivate, FancyRandom } = require("../lib/");


Bixby({
  pattern: 'runtime',
  fromMe: isPrivate,
  type: 'misc',
  desc: 'Shows Bot Running time'
}, (async (message, match) => {
  var ut_sec = require("os").uptime(); 
  var ut_min = ut_sec/60; 
  var ut_hour = ut_min/60; 
  ut_sec = Math.floor(ut_sec); 
  ut_min = Math.floor(ut_min); 
  ut_hour = Math.floor(ut_hour); 
  ut_hour = ut_hour%60; 
  ut_min = ut_min%60; 
  ut_sec = ut_sec%60; 
  var sec_num = parseInt(process.uptime(), 10);
  var hours   = Math.floor(sec_num / 3600);
  var minutes = Math.floor((sec_num - (hours * 3600)) / 60);
  var seconds = sec_num - (hours * 3600) - (minutes * 60);
  var uptime_process = (`Runtime: ${ut_hour} Hour  ${ut_min} minute ${ut_sec} second`)  
  var xl = await FancyRandom(uptime_process)
    return await message.reply(xl);
}));



