import createPlaylist from '../functions/createplaylist.js'
import searchVideo from '../functions/searchVideo.js'
import addVideoToPlaylist from '../functions/addVideotoPlaylist.js'

async function createPlaylistAndAddVideo(auth, searchQuery) {
    try {
        const playlistId = await createPlaylist(auth);
        console.log(`Created playlist with ID: ${playlistId}`);

        const videoId = await searchVideo(auth, searchQuery);
        console.log(`Found video with ID: ${videoId}`);

        const addVideoResponse = await addVideoToPlaylist(auth, playlistId, videoId);
        console.log(`Added video to playlist: ${addVideoResponse.snippet.title}`);
    }
    catch (error) {
        console.error('Error:', error.message);
    }
}


export default createPlaylistAndAddVideo