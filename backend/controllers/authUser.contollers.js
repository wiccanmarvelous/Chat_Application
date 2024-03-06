import bcrypt from 'bcryptjs'

import User from "../models/user.models.js";
import geTokenSetCookie from '../utils/genTokenSetCookie.js';

export const signup = async (req, res) => {
    try {
        const { name, username, password, confirmPassword } = req.body;

        if (password !== confirmPassword)
            return res.status(400).json({ error: 'Password do not match.' });

        const user = await User.findOne({ username });

        if (user)
            return res.status(400).json({ error: 'Username already exists.' });

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const profilePic = `https://avatar.iran.liara.run/public`;

        const newUser = new User({
            name,
            username,
            password: hashedPassword,
            profilePic
        });

        if (newUser) {
            geTokenSetCookie(res, newUser._id);
            await newUser.save();
            res.status(200).json({
                id: newUser._id,
                name: newUser.name,
                username: newUser.username,
                profilePic: newUser.profilePic
            })
        } else {
            res.status(400).json({ error: 'Invalid user data.' });
        }

    } catch (error) {
        console.log("Error in signup controller", error.message);
        res.status(500).json({ error: 'Internal server error' });
    }
}
export const login = async (req, res) => {
}

export const logout = async () => {

}
