import axios from "axios"
async function getSongDetail(data, response) {
    try {

        const playlistId = data.split('/playlist/')[1];

        const songsData = await axios.get(`https://api.spotify.com/v1/playlists/${playlistId}/tracks`, {
            headers: {
                'Authorization': `Bearer ${response}`
            }
        })




        const songDetail = songsData.data.items.map((i) => {
            const songName = i.track.name;
            const songArtist = i.track.artists[0].name;
            return ({ song: songName, artists: songArtist })

        })

        return songDetail
    }
    catch (error) {
        console.error('Error fetching playlist tracks:', error.response ? error.response.data : error.message);
    }


}

export default getSongDetail