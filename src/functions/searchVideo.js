import { google } from "googleapis";
async function searchVideo(auth, query) {
    const youtube = google.youtube({ version: 'v3', auth });

    const response = await youtube.search.list({
        part: 'snippet',
        q: query,
        type: 'video',
        maxResults: 1, // You can adjust this as needed
    });

    if (response.data.items.length > 0) {
        return response.data.items[0].id.videoId; // Returns the video ID
    } else {
        throw new Error('No video found');
    }
}

export default searchVideo