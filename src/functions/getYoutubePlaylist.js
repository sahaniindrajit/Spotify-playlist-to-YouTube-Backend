import createPlaylist from "./createplaylist.js";
import searchVideoAndAddVideo from "./searchVideoandAddVideo.js";

async function getYoutubePlaylist(detail, auth) {

    try {
        if (!detail || detail.length === 0) {
            console.log('No songs to process.');
            return false;
        }

        let playlistId = await createPlaylist(auth);

        for (const i of detail) {
            const query = `${i.song} ${i.artists} song`;

            try {
                await searchVideoAndAddVideo(auth, query, playlistId);

            }
            catch (error) {
                console.error('Error during API call:', error);
            }
        }

        return playlistId;  // Return playlist ID on success
    }
    catch (error) {
        console.error('Error creating playlist:', error.message);
        return false;
    }
}

export default getYoutubePlaylist