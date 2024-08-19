import Router from 'express'
import { google } from 'googleapis'
import cookieParser from 'cookie-parser'
import env from 'dotenv'
env.config()

const route = Router();
route.use(cookieParser());

// Replace with your Google OAuth credentials
const CLIENT_ID = process.env.YOUTUBECLIENTID;
const CLIENT_SECRET = process.env.YOUTUBECLIENTSECRET
const REDIRECT_URI = 'https://spotify-playlist-to-youtube-backend.onrender.com/user/google/oauth2callback';
const oauth2Client = new google.auth.OAuth2(
  CLIENT_ID,
  CLIENT_SECRET,
  REDIRECT_URI
);

// Define the YouTube OAuth scope
const SCOPES = ['https://www.googleapis.com/auth/youtube',
  'https://www.googleapis.com/auth/youtube.force-ssl',];

// Step 1: Redirect to Google's OAuth 2.0 server
route.get('/auth', (req, res) => {
  const authUrl = oauth2Client.generateAuthUrl({
    access_type: 'offline',
    scope: SCOPES,
  });
  res.redirect(authUrl);
});

// Step 2: Exchange authorization code for access token
route.get('/oauth2callback', async (req, res) => {
  const code = req.query.code;
  try {
    const { tokens } = await oauth2Client.getToken(code);
    oauth2Client.setCredentials(tokens);

    // Store the access token in a cookie
    res.cookie('youtube_access_token', tokens.access_token);

    res.redirect('https://spotify-playlist-to-youtube-frontend.onrender.com/playlist');
  } catch (error) {
    console.error('Error retrieving access token', error);
    res.send('Error retrieving access token');
  }
});

export default route