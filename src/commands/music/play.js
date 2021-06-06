import Discord from "discord.js";
import ytdl from "ytdl-core";
import ytsr from "ytsr";

import { join } from "./index";
/**
 * Joins user's channel and plays the music specified in cargs
 * @param {String} cargs
 * @param {Discord.Message} message
 */
export default async function playMusic(cargs, client, message) {
  const connection = await join(message);

  //TODO: Add music info badge here later

  /* --------------------- searching and playing the music -------------------- */
  let {
    items: [music],
  } = await ytsr(cargs, {
    limit: 1,
  });

  connection.play(ytdl(music.url, { filter: "audioonly" }));
}
