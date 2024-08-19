
# Spotify Playlist to YouTube Backend

Welcome to the **Spotify Playlist to YouTube Backend**! This repository contains a backend service designed to convert Spotify playlists into YouTube Playlist in user's Google Account.[CheckOut the blog to better understand the project](https://sahaniindrajit.hashnode.dev/import-spotify-playlist-to-youtube-account-with-nodejs)

[Checkout Frontend source code](https://github.com/sahaniindrajit/Spotify-playlist-to-YouTube-Frontend)


## 🚀 Installation and Setup

### Clone the Repository

Start by cloning the repository to your local machine:

```bash
git clone https://github.com/sahaniindrajit/Spotify-playlist-to-YouTube-Backend.git
cd Spotify-playlist-to-YouTube-Backend
```
# Install Dependencies
## Ensure you have Node.js installed on your system. Then, install the required packages with:

```bash
npm install axios cookie-parser cors dotenv express googleapis nodemon
```
### This will install all necessary dependencies, including:
+ `axios` for making HTTP requests
+ `cookie-parser` for handling cookies
+ `cors` for managing cross-origin requests
+ `dotenv` for environment variable management
+ `express` for setting up the server
+ `googleapis` for interacting with YouTube API
+ `nodemon` for automatic server restarts during development
# Configure Environment Variables
**Create a .env file in the root directory of the project. Add your environment-specific variables to this file:**

## dotenv
**Replace the placeholder values with your actual credentials**
```bash
PORT=3000
CLIENTID=Your_Spotify_Client_ID
CLIENTSECRET=Your_Spotify_Client_Secret
YOUTUBECLIENTID=Your_YouTube_Client_ID
YOUTUBECLIENTSECRET=Your_YouTube_Client_Secret.
```

## Start the Server
Run the server in development mode with:
```bash
npm run dev
```
This will start the server and automatically restart it on code changes.

## 🎉 Usage
Once the server is running, you can make API requests to convert Spotify playlists into YouTube video links. Simply provide the Spotify playlist details, and you'll receive the corresponding YouTube video links as output.

## 🤝 Contributing
We welcome contributions to enhance this project! To contribute:

Fork the repository.
Create a new branch for your feature or bug fix.
Make your changes and test thoroughly.
Submit a pull request with a detailed description of your changes.
Please follow our contributing guidelines for more details.

## 💬 Contact
For any questions or feedback, feel free to reach out to Indrajit Sahani.

Happy coding and enjoy transforming Spotify playlists into YouTube videos! 🎵📹
