const axios = require("axios");
const { jidDecode, delay } = require("@whiskeysockets/baileys");
const id3 = require("browser-id3-writer");
const fs = require("node-webpmux/io");
const { readFile, unlink } = require("fs/promises");
const { fromBuffer } = require("file-type");


async function FiletypeFromUrl(url){
  const buffer = await getBuffer(url);
  const out = await fromBuffer(buffer);
  let type
  if(out){
   type = out.mime.split('/')[0]
  }
  return {type,buffer}
}
function extractUrlFromMessage(message) {
  const urlRegex = /(https?:\/\/[^\s]+)/gi;
  const match = urlRegex.exec(message);
  return match ? match[0] : null;
}
module.exports = {
  FiletypeFromUrl,
  extractUrlFromMessage,
  parseJid(text = "") {
    return [...text.matchAll(/@([0-9]{5,16}|0)/g)].map(
      (v) => v[1] + "@s.whatsapp.net"
    );
  },
  parsedJid(text = "") {
    return [...text.matchAll(/([0-9]{5,16}|0)/g)].map(
      (v) => v[1] + "@s.whatsapp.net"
    );
  },
  
