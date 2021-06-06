import Discord from "discord.js";

/**
 * Joins user's voice channel
 * @param {Discord.message} message
 */
export default async function join(message) {
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
      "You need to be in the same voice channel that the bot to use this command"
    );
  }

  return connection;
}
