import Discord from "discord.js";
import dotenv from "dotenv";

import Client from "./src/classes/Client";
import playMusic from "./src/commands/music/playMusic";

dotenv.config();

const token = process.env.TOKEN;
const prefix = process.env.PREFIX;
const client = new Client();

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
  client.on("message", (message) => {
    // verify if the message is a command
    if (message.content.startsWith(prefix)) {
      const cmsg = message.content.substring(1);

      const command = cmsg.substring(0, cmsg.indexOf(" ")) || cmsg;
      const args = cmsg.substring(cmsg.indexOf(" ") + 1);

      switch (command) {
        case "play":
          playMusic(args, client, message);
      }
    }
  });
});

client.login(token);
