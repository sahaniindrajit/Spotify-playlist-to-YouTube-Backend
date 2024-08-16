import axios from "axios"
async function getSongDetail(data, response) {
    if (!data) {
        throw new Error('Invalid data: data is undefined or null');
    }
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

export default getSongDetail