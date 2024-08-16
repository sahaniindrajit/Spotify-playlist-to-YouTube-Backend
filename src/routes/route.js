import Router from 'express'
import getToken from '../functions/getSpotifyToken.js'
import getDetail from '../functions/getDetail.js'
import googleRoute from './getYoutubeToken.js'
import createPlaylistAndAddVideo from '../functions/createPlaylistAndAddVideo.js'
import cookieParser from 'cookie-parser'
import { google } from 'googleapis'

const oauth2Client = new google.auth.OAuth2(
    process.env.YOUTUBECLIENTID,    // Replace with your client ID
    process.env.YOUTUBECLIENTSECRET, // Replace with your client secret
    'http://localhost:3000/user/google/oauth2callback' // Replace with your redirect URI
);
const route = Router()
route.use('/google', googleRoute)
route.use(cookieParser());

route.get('/playlist', async (req, res) => {
    //const data = req.body.data
    //const response = await getToken()
    //const detail = await getDetail(data, response)



    const auth = req.cookies.youtube_access_token
    if (!auth) {
        return res.status(401).send('No access token found.');
    }

    createPlaylistAndAddVideo(auth, "until i found you stephen sanchez")

    res.json({
        msg: "ji"
    })

})

route.get('/handleRequest', async (req, res) => {
    const accessToken = req.cookies.youtube_access_token;

    if (!accessToken) {
        return res.status(401).send('No access token found.');
    }

    oauth2Client.setCredentials({
        access_token: accessToken,
    });

    try {
        await createPlaylistAndAddVideo(oauth2Client, "until i found you stephen sanchez");
        res.send('Playlist updated successfully.');
    } catch (error) {
        console.error('Error during API call:', error.message);
        res.status(500).send('Failed to update playlist.');
    }
});


export default route