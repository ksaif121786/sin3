import express from 'express';
import connectDB from './config/db.js'
connectDB()
const app = express();

import authroute from './routes/authroute.js'
app.use(express.json())
app.use('/api', authroute)

app.listen(3000, () => {
    console.log('Port 3000 is running.')
})