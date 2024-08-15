import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors';
import morgan from 'morgan';

const port = process.env.PORT || 3000
const app = express()

dotenv.config()
app.use(express.json());
app.use(morgan('tiny'))
app.use(cors())




app.listen(`App is running at port ${port}`);
