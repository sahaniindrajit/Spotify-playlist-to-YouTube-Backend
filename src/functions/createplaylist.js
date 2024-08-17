import { google } from "googleapis";
async function createPlaylist(auth) {
  const youtube = google.youtube({ version: 'v3', auth });
  const response = await youtube.playlists.insert({
    part: 'snippet,status',
    requestBody: {
      snippet: {
        title: "songs",
        description: "spotify playlist songs in one place",
      },
      status: {
        privacyStatus: 'public',
      },
    },
  });

  return response.data.id;
}


export default createPlaylist