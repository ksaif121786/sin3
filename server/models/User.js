import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
    image: {
        type: String,
        default: '/uploads/users/default.png'
    },
    name: {
        type: String,
        trim: true
    },
    email: {
        type: String,
        trim: true
    },
    phone: {
        type: String,
        unique: true,
        trim: true
    },
    otp: {
        type: String,
        required: true
    },
    status: {
        type: String,
        default: 'active'
    }
}, { timestamps: true });

const User = mongoose.model('User', userSchema);
export default User