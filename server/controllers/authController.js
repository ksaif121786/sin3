import jwt from 'jsonwebtoken'
import User from '../models/User.js';

export const login = async (req, res) => {
    try {
        const { phone } = req.body;
        var checkuser = await User.findOne({ phone });
        if (!checkuser) {
            const user = new User({ phone, otp: 123456 });
            user.save();
        } else {
            checkuser.otp = 123456;
            checkuser.save();
        }

        res.json({ status: true, message: 'Otp has sent to your number.' })
    } catch (err) {
        res.json({ status: false, message: err.message })
    }
}


export const otp_verify = async (req, res) => {
    try {

        const { phone, otp } = req.body;
        const user = await User.findOne({ phone, otp })
        console.log('useruseruser', user)
        if (!user) res.json({ status: false, message: 'Invalid otp.' });

        var setup_profile_status = 0;
        var name = '';
        if (user.name) {
            name: user.name;
            setup_profile_status = 1;
        }

        var token = jwt.sign({ _id: user._id.toString() }, 'sssssshhhhhh')
        res.json({ status: true, data: { token, setup_profile_status, name }, message: 'Otp verified successfully.' })
    } catch (err) {
        res.json({ status: false, message: err.message });
    }
}


export const setup_profile = async (req, res) => {
    try {
        const { name, email } = req.body;
        const user = await User.findById(req.user._id);
        user.name = name;
        user.email = email;
        user.save();


        res.json({ status: true, data: { name }, message: 'Profile setup successfully.' });
    } catch (err) {
        res.json({ status: false, message: err.message })
    }
}


export const get_profile = async (req, res) => {
    try {
        var user = await User.findById(req.user._id);
        res.json({ status: true, data: { profile: user }, message: 'Profile details.' });
    } catch (err) {
        res.json({ status: false, message: err.message });
    }
}


export const update_profile = async (req, res) => {
    try {
        const { name } = req.body;
        var user = await User.findById(req.user._id);
        user.name = name;
        user.save();
        res.json({ status: true, message: 'Profile updated successfully.' });
    } catch (err) {
        res.json({ status: false, message: err.message });
    }
}