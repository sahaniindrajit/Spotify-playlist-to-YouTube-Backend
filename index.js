import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors';
import morgan from 'morgan';
import router from './src/routes/route.js';

const port = process.env.PORT || 3000
const app = express()

dotenv.config()
app.use(express.json());
app.use(morgan('tiny'))
app.use(cors({
    origin: 'https://spotify-playlist-to-youtube-frontend.onrender.com', // Allow frontend
    credentials: true, // Allow cookies to be sent with requests
}));
app.use('/user', router)



app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
