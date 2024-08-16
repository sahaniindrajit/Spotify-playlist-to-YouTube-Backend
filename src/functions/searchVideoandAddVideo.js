import searchVideo from './searchVideo.js'
import addVideoToPlaylist from './addVideotoPlaylist.js'

async function searchVideoAndAddVideo(auth, searchQuery, playlistId) {
    try {


        const videoId = await searchVideo(auth, searchQuery);
        console.log(`Found video with ID: ${videoId}`);

        const addVideoResponse = await addVideoToPlaylist(auth, playlistId, videoId);
        console.log(`Added video to playlist: ${addVideoResponse.snippet.title}`);
    }
    catch (error) {
        console.error('Error:', error.message);
    }
}


export default searchVideoAndAddVideo