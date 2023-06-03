import express from 'express';
import cors from 'cors'
import connectDB from './config/db.js'
connectDB()
const app = express();

import authroute from './routes/authroute.js'

app.use(express.json())

app.use(cors());
app.use('/api', authroute)

app.listen(3001, () => {
    console.log('Port 3001 is running.')
})