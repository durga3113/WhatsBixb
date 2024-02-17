/* Copyright (C) 2023 DX-MODS.
Licensed under the MIT License;
you may not use this file except in compliance with the License.
WhatsBixby - Ziyan
*/

const {
  getFilter,
  setFilter,
  deleteFilter,
  toggleFilter,
} = require("../lib/db/filters");
const { Bixby, isPublic, tiny } = require("../lib");
const {getString} = require('../lib/lang');
const Lang = getString('filters');

Bixby(
  {
    pattern: "filter",
    fromMe: true,
    desc: Lang.FILTER_DESC,
    usage: ".filter keyword:message",
    type: "group",
  },
  async (message, match) => {
    let { prefix } = message;
    let text, msg;
    try {
      [text, msg] = match.split(":");
    } catch {}
    if (!match) {
      filtreler = await getFilter(message.jid);
      if (filtreler === false) {
        await message.reply(Lang.NO_FILTER);
      } else {
        var mesaj = Lang.FILTERS + "\n\n";
        filtreler.map(
          (filter) => (mesaj += `✒ ${filter.dataValues.pattern}\n`)
        );
        mesaj += tiny("use : .filter keyword:message\nto set a filter");
        await message.reply(mesaj);
      }
    } else if (!text || !msg) {
      return await message.reply(
        "```use : .filter keyword:message\nto set a filter```"
      );
    } else {
      await setFilter(message.jid, text, msg, true);
      return await message.reply(`_Sucessfully set filter for ${text}_`);
    }
  }
);

Bixby(
  {
    pattern: "stop",
    fromMe: true,
    desc: Lang.STOP_DESC,
    usage: '.stop "hello"',
    type: "group",
  },
  async (message, match) => {
    if (!match) return await message.reply("\n*Example:* ```.stop hello```");

    del = await deleteFilter(message.jid, match);

    if (!del) {
      await message.reply(Lang.ALREADY_NO_FILTER);
    } else {
      await message.reply(`_Filter ${match} deleted_`);
    }
  }
);

Bixby({ on: "text", fromMe: isPublic }, async (message, match) => {
  var filtreler = await getFilter(message.jid);
  if (!filtreler) return;
  filtreler.map(async (filter) => {
    pattern = new RegExp(
      filter.dataValues.regex
        ? filter.dataValues.pattern
        : "\\b(" + filter.dataValues.pattern + ")\\b",
      "gm"
    );
    if (pattern.test(match)) {
      await message.reply(filter.dataValues.text, {
        quoted: message,
      });
    }
  });
});

