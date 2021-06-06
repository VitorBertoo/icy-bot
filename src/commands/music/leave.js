import Discord from "discord.js";

export default async function leave(message) {
  console.log("teste");
  const connection = message.guild.voice?.connection;
  if (!connection) {
    message.channel.send(
      "I must be in a voice channel for you to use this command"
    );

    return;
  } else {
    connection.disconnect();
  }
}
