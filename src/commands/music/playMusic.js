import Discord from "discord.js";
import ytdl from "ytdl-core";
import ytsr from "ytsr";

/**
 * Joins user's channel and plays the music specified in cargs
 * @param {String} cargs
 * @param {Discord.Message} message
 */
export default async function playMusic(cargs, client, message) {
  /* --------------- verifying if the user is in a voice channel -------------- */
  const voiceChannel = message.member.voice.channel;
  if (!voiceChannel) {
    message.channel.send(
      "You need to be in a voice channel to use this command"
    );
    return;
  }

  /* ----------------- verifying and setting client connection ---------------- */
  let connection = message.guild.voice?.connection;
  if (!connection) connection = await voiceChannel.join();
  else if (connection.channel != voiceChannel) {
    message.channel.send(
      "You need to be in the same voice channel tha the bot to use this command"
    );
  }

  //TODO: Add music info badge here later

  /* --------------------- searching and playing the music -------------------- */
  let {
    items: [music],
  } = await ytsr(cargs, {
    limit: 1,
  });

  connection.play(ytdl(music.url, { filter: "audioonly" }));
}
