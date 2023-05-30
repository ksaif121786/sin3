import mongoose from 'mongoose';
const connectDB = () => {
    mongoose.connect('mongodb://localhost:27017/sinoy')
        .then(() => console.log('database connected...'))
        .catch(() => console.log('Could not connect to database.'))
}

export default connectDB