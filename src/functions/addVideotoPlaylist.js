import { google } from "googleapis";
async function addVideoToPlaylist(auth, playlistId, videoId) {
    const youtube = google.youtube({ version: 'v3', auth });

    const response = await youtube.playlistItems.insert({
        part: 'snippet',
        requestBody: {
            snippet: {
                playlistId: playlistId,
                resourceId: {
                    kind: 'youtube#video',
                    videoId: videoId,
                },
            },
        },
    });

    return response.data;
}
export default addVideoToPlaylist