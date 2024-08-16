import axios from "axios";
async function getSpotifyToken() {

    try {
        const client_id = process.env.CLIENTID
        const client_secret = process.env.CLIENTSECRET

        const authHeader = Buffer.from(`${client_id}:${client_secret}`).toString('base64');

        const response = await axios.post("https://accounts.spotify.com/api/token",
            new URLSearchParams({
                grant_type: 'client_credentials'
            }).toString()
            ,
            {
                headers: {
                    'Authorization': `Basic ${authHeader}`,
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            }
        )

        return response.data.access_token;
    }
    catch (error) {
        console.error('Error fetching Spotify token:', error.response ? error.response.data : error.message);
    }
}

export default getSpotifyToken