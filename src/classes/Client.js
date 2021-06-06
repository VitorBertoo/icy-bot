import Discord from "discord.js";

export default class Client extends Discord.Client {
  playlists = {};

  getPlaylist(server) {
    return musics[server];
  }

  setPlaylist(server, playlist) {
    musics[server] = playlist;
  }
}
