import User from '../models/User.js';

export const login = async (req, res) => {
    try {
        const { phone } = req.body;
        const user = new User({ phone, otp: 123465 });
        user.save();

        res.status(200).json({ status: true, message: 'Otp has sent to your number.' })
    } catch (err) {
        res.status(400).json({ status: false, message: err.message })
    }
}


export const otp_verify = async (req, res) => {
    try {
        const { phone, otp } = req.body;
        const user = await User.findOne({ phone, otp })
        if (!user) res.status(400).json({ status: false, message: 'Invalid otp.' });
        var setup_profile_status = 0;
        if (user.name) {
            setup_profile_status = 1;
        }
        res.status(200).json({ status: true, data: { id: user._id, setup_profile_status }, message: 'Otp verified successfully.' })
    } catch (err) {
        res.status(400).json({ status: false, message: err.message });
    }
}


export const setup_profile = async (req, res) => {
    try {
        const { id, name, email } = req.body;
        const user = await User.findById(id);
        user.name = name;
        user.email = email;
        user.save();

        res.status(200).json({ status: true, message: 'Profile setup successfully.' });
    } catch (err) {
        res.status(400).json({ status: false, message: err.message })
    }
}