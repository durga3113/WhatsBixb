/*Copyright (C) 2024 DX-MODS.
Licensed under the MIT License;
you may not use this file except in compliance with the License.
WhatsBixby - Ziyan
*/

const Heroku = require("heroku-client");
const { Bixby, isPublic } = require("../lib/");
const tiny = require("../lib/functions");
const { HEROKU_APP_NAME, HEROKU_API_KEY } = require("../config");
const heroku = new Heroku({ token: HEROKU_API_KEY });
const baseURI = "/apps/" + HEROKU_APP_NAME;
const simpleGit = require("simple-git");
const git = simpleGit();
const exec = require("child_process").exec;
let {
    getString
} = require("../lib/language");
let Lang = getString("updater");

Bixby(
  {
    pattern: "update",
    fromMe: true,
    type: "heroku",
    desc: Lang.UPDATER_DESC,
  },
  async (message, match,) => {
    let {prefix} = message
    if (match === "now") {
      await git.fetch();
      var commits = await git.log([
        Config.BRANCH + "..origin/" + Config.BRANCH,
      ]);
      if (commits.total === 0) {
        return await message.sendMessage(Lang.UPDATE);
      } else {
        await message.reply(Lang.UPDATING);

        try {
          var app = await heroku.get("/apps/" + Config.HEROKU_APP_NAME);
        } catch {
          await message.sendMessage(Lang.INVALID_HEROKU);
          await new Promise((r) => setTimeout(r, 1000));
        }

        git.fetch("upstream", Config.BRANCH);
        git.reset("hard", ["FETCH_HEAD"]);

        var git_url = app.git_url.replace(
          "https://",
          "https://api:" + Config.HEROKU_API_KEY + "@"
        );

        try {  
          await git.addRemote("heroku", git_url);
        } catch {
          console.log("heroku remote error");
        }
        await git.push("heroku", Config.BRANCH);

        await message.sendMessage(Lang.UPDATED);
      }
    }
    await git.fetch();
    var commits = await git.log([Config.BRANCH + "..origin/" + Config.BRANCH]);
    if (commits.total === 0) {
      await message.sendMessage(Lang.UPDATE);
    } else {
      var availupdate = "*ᴜᴘᴅᴀᴛᴇs ᴀᴠᴀɪʟᴀʙʟᴇ* \n\n";
      commits["all"].map((commit, num) => {
        availupdate += num + 1 + " ●  " + tiny(commit.message) + "\n";
      });
      return await message.client.sendMessage(message.jid, {
        text: availupdate,
        footer: tiny("click here to update"),
      });
    }
  }
);

Bixby(
  {
    pattern: "update now",
    fromMe: true,
    type: "heroku",
    desc: Lang.UPDATE_START_DESC,
  },
  async (message) => {}
);
