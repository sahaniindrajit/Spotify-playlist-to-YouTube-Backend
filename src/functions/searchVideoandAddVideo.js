import searchVideo from './searchVideo.js'
import addVideoToPlaylist from './addVideotoPlaylist.js'

async function searchVideoAndAddVideo(auth, searchQuery, playlistId) {
    try {
        const videoId = await searchVideo(auth, searchQuery);

        await addVideoToPlaylist(auth, playlistId, videoId);

    }
    catch (error) {
        console.error('Error:', error.message);
    }
}


export default searchVideoAndAddVideo