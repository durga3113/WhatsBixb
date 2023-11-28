/* Copyright (C) 2023 DX-MODS.
Licensed under the MIT License;
you may not use this file except in compliance with the License.
Bixby - Ziyan
*/
var config = require("../config");
var commands = [];

function Bixby(info, func) {
  let types = ['converter','downloader','game','group','heroku','tool','user','x-media','search','Textpro','Maker','misc','encode']
  var infos = info;
  infos.function = func;
  infos.pattern = new RegExp( `${config.HANDLERS}( ?${info.pattern})`,  `is` );
  if (!infos.dontAddCommandList) infos.dontAddCommandList = false;
  if (!infos.fromMe) infos.dontAddCommandList = false;
  if (!info.type||!types.includes(info.type)) infos.type = 'misc';
  commands.push(infos);
  return infos;
}
module.exports = {
  Bixby,
  commands,
};
