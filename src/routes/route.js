import Router from 'express'
import getToken from '../functions/getSpotifyToken.js'
import getDetail from '../functions/getDetail.js'
import googleRoute from './getYoutubeToken.js'
import cookieParser from 'cookie-parser'
import { google } from 'googleapis'
import getYoutubePlaylist from '../functions/getYoutubePlaylist.js'

//for setting google oauth2  
const oauth2Client = new google.auth.OAuth2(
    process.env.YOUTUBECLIENTID,    // Replace with your client ID
    process.env.YOUTUBECLIENTSECRET, // Replace with your client secret
    'https://spotify-playlist-to-youtube-backend.onrender.com/user/google/oauth2callback' // Replace with your redirect URI
);

const route = Router()
route.use(cookieParser());
route.use('/google', googleRoute)

route.post('/playlist', async (req, res) => {
    try {
        //for generating youtube access token
        const accessToken = req.cookies.youtube_access_token; //for acessing the token through backend postman

        if (!accessToken) {
            return res.status(401).send('No access token found.');
        }

        oauth2Client.setCredentials({
            access_token: accessToken,
        });

        //for getting playlist url
        const data = req.body.data
        if (!data || !data.includes('playlist')) {
            return res.json({
                msg: "invalid link!! Please only give the link of a playlist"
            })
        }

        //for generating spotify api token
        const response = await getToken()
        if (!response) {
            return res.json({
                msg: "Failed to obtain spotify token"
            })
        }

        //for getting all the songs from spotify playlist
        const detail = await getDetail(data, response)

        //for creating and adding song to user's youtube playlist
        const success = await getYoutubePlaylist(detail, oauth2Client)

        if (success == false) {
            return res.json({
                msg: "Developer api Queries quota all used. Try again next day"
            })
        }
        return res.json({
            msg: "playlist added",
            link: `https://www.youtube.com/playlist?list=${success}`
        })
    }
    catch (error) {
        console.error('Error in /playlist route:', error);
        return res.status(500).json({ msg: 'Internal server error' });
    }



})




export default route