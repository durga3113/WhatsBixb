const { Bixby, isPrivate } = require("../lib/");
const got = require('got');
Bixby({
      pattern: "weather ?(.*)",
      fromMe: isPrivate,
      desc: "shows weather information",
      usage: ".weather area",
      use: 'search'
  }, async (message, match) => {
if (match === '') return await message.send('pls give location also');
const url = `http://api.openweathermap.org/data/2.5/weather?q=${match}&units=metric&appid=060a6bcfa19809c2cd4d97a212b19273&language=en`;
try {
const response = await got(url);
const json = JSON.parse(response.body);
if (response.statusCode === 200) return await message.send('*📍 ' + LOCATION +':* ```' + match + '```\n\n' +
'*☀ ' +  TEMP +':* ```' + json.main.temp_max + '°```\n' + 
'*ℹ ' + DESC +':* ```' + json.weather[0].description + '```\n' +
'*☀ ' + HUMI +':* ```%' + json.main.humidity + '```\n' + 
'*💨 ' + WIND +':* ```' + json.wind.speed + 'm/s```\n' + 
'*☁ ' + CLOUD +':* ```%' + json.clouds.all + '```\n');
} catch {
return await message.send('not found');
}
});
