import jwt from 'jsonwebtoken';
import User from '../models/User.js'

const authentication = async (req, res, next) => {
    try {
        const token = req.header('Authorization').replace('Bearer ', '');
        const decode = jwt.verify(token, 'sssssshhhhhh')
        const user = await User.findById(decode._id);
        if (!user) {
            res.json({ status: false, message: 'unauthorized access' });
        }
        req.user = user;
        req.token = token;
        next()
    } catch (err) {
        res.json({ status: false, message: 'unauthorized access' });
    }
}

export default authentication