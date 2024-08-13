const { Bixby, isPublic } = require("../lib/");
const axios = require("axios")
const fetch = require("node-fetch");
const tiny = require("../lib/functions/");
const { BASE_URL, API_KEY } = require("../config");

Bixby(
  {
    pattern: "city",  
    fromMe: isPublic,
    desc: "get data of any city",
    type: "information",
  },
  async (message, match) => {
    match = match || message.reply_message.text;
    if (!match) return await message.reply("*_Give me any city_*");
    
    const ipimg = "https://graph.org/file/7e3dbae9d2a31c75e5bd6.jpg";
    const url = 'https://countriesnow.space/api/v0.1/countries/population/cities';
    const data = {
      city: match
    };

    try {
      const response = await axios.post(url, data);
      const ipinfo = response.data;

      if (ipinfo.error) {
        return await message.reply("Failed to fetch city data.");
      }

      // Extracting the needed information
      const cityData = ipinfo.data;
      const populationInfo = cityData.populationCounts.map(dx => 
        `Year: ${dx.year}, Population: ${dx.value}, Sex: ${dx.sex}, Reliability: ${dx.reliabilty}`
      ).join('\n');

      const caption = `City: ${cityData.city}\nCountry: ${cityData.country}\nPopulation Data:\n${populationInfo}`;

      await message.client.sendMessage(message.jid, {
        image: {
          url: ipimg,
        },
        caption: caption,  // Sending the formatted string
      }, {
        quoted: message,
      });
    } catch (error) {
      console.error('Error:', error);
      await message.reply("Failed to fetch city data.");
    }
  }
);



Bixby(
  {
    pattern: "ip",	
    fromMe: isPublic,
    desc: "get info of ip address",
    type: "information",
  },
  async (message, match) => {
  match = match || message.reply_message.text;
  if (!match) return await message.reply("*_Give me user name*");
  const response = await axios.get(`${BASE_URL}api/stalk/ip?ip=${match}&apikey=${API_KEY}`);
  ipimg = "https://graph.org/file/7e3dbae9d2a31c75e5bd6.jpg";
  const { continent, country, countryCode, regionName, city, zip, lat, lon, timezone, currency, isp, org, mobile, proxy } = response.data.result;
  const ipinfo = `
  * IP INFORMATION *
  CONTINENT : ${continent}
  COUNTRY : ${country}
  COUNTRY CODE : ${countryCode}
  REGION : ${regionName}
  CITY : ${city}
  ZIP CODE : ${zip}
  LATITUDE : ${lat}
  LONGITUDE : ${lon}
  TIMEZONE : ${timezone}
  CURRENCY : ${currency}
  ISP : ${isp}
  ORG : ${org}
  MOBILE : ${mobile}
  PROXY : ${proxy}
  `;
  await message.client.sendMessage(message.jid, {
  image: {
  url: ipimg,
  },
  caption: tiny(ipinfo),
  }, {
  quoted: message,
  });
  });
    
Bixby(
  {
    pattern: "covid",	
    fromMe: isPublic,
    desc: "gives global covid info",
    type: "info",
  },
  async (message, match) => {
  const response = await axios.get(`${BASE_URL}api/other/covid-world?&apikey=8coTqIYPs6`);
  const { totalCases, recovered, deaths, activeCases, closedCases, lastUpdate } = response.data.result;
  const covidtxt = `
  * COVID INFORMATION *
  _Total Cases:_ *${totalCases}*
  _Active cases:_ *${activeCases}*
  _Closed Cases:_ *${closedCases}*
  _Recovered Cases:_ *${recovered}*
  _Total Deaths:_ *${deaths}*
  _Last updated:_ *${lastUpdate}*
  `;
  await message.client.sendMessage(
  message.jid, {
  text: tiny(covidtxt),
  }, {
  quoted: message,
  }
  );
  });
    
Bixby(
  {
    pattern: "weather",	
    fromMe: isPublic,
    desc: "data of any flim or Series",
    type: "information",
  }, 
  async (message, match) => {
  match = match || message.reply_message.text;
  if (!match) return await message.reply("*_Give me location.india!_*");
  let wdata = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${match}&units=metric&appid=060a6bcfa19809c2cd4d97a212b19273&language=en`);
  let textw = "";

  textw += `*_Weather of  ${match}*\n\n_`;

  textw += `_*Weather:-* ${wdata.data.weather[0].main}\n_`;

  textw += `_*Description:-* ${wdata.data.weather[0].description}\n_`;

  textw += `_*Avg Temp:-* ${wdata.data.main.temp}\n_`;

  textw += `_*Feels Like:-* ${wdata.data.main.feels_like}\n_`;

  textw += `_*Pressure:-* ${wdata.data.main.pressure}\n_`;

  textw += `_*Humidity:-* ${wdata.data.main.humidity}\n_`;

  textw += `_*Humidity:-* ${wdata.data.wind.speed}\n_`;

  textw += `_$*Latitude:-* ${wdata.data.coord.lat}\n_`;

  textw += `_*Longitude:-* ${wdata.data.coord.lon}\n_`;

  textw += `_*Country:-* ${wdata.data.sys.country}\n_`;
  
  await message.client.sendMessage(
  message.jid, {
  text: textw,
  }, {
  quoted: message,
  });
  });    

Bixby(
  {
    pattern: "pincode",
    fromMe: isPublic,
    desc: "get pincode information",
    type: "information",
  },
  async (message, match) => {
  match = match || message.reply_message.text;
  if (!match) return await message.reply("*_Give me any pincode*");
  const response = await axios.get(`${BASE_URL}api/other/pincode?pincode=${match}&apikey=${API_KEY}`);
  pincodeimg = "https://graph.org/file/31817366c5e2557a595d9.jpg";
  const data = response.data.result;
  if (data && data.length > 0 && data[0].PostOffice) {
  const postOffices = data[0].PostOffice;
  postdata = postOffices.map((office, index) => (
  `Post Office ${index + 1}:\n  Name: ${office.Name}\n  Branch Type: ${office.BranchType}\n  Delivery Status: ${office.DeliveryStatus}\n  District: ${office.District}\n  State: ${office.State}\n------------------------`
  )).join('\n');
  }
  await message.client.sendMessage(message.jid, {
  image: {
  url: pincodeimg,
  },
  caption: postdata || "No pincode found",
  }, {
  quoted: message,
  });
  });
