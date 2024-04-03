const bcrypt = require('bcrypt');
const User = require("../models/User");
const jwt = require('jsonwebtoken');

exports.createUser = async(req, res) => {
    try {
        const { username, password, email, birthDate, gender } = req.body;

        const existingUser = await User.findOne({ $or: [{ username }, { email }] });
        if (existingUser) {
            // User with the provided username or email already exists
            return res.status(400).json({ error: "Username or email already exists" });
        }
        const hashedPassword = await bcrypt.hash(password, 10); // 10 is the saltRounds parameter

        const newUser = new User({ username, password: hashedPassword, email, birthDate, gender });
        await newUser.save();
        res.status(201).json({ message: "User created successfully", user: newUser });
    } catch (error) {
        console.error("Error creating user:", error);
        res.status(500).json({ error: "Internal server error" });
    }
};

exports.login = async(req, res) => {
    try {
        const { email, password, rememberMe } = req.body;
        const existingUser = await User.findOne({ email });
        if (!existingUser) {
            return res.status(400).json({ error: "Invalid email" });
        }

        const passwordMatch = await bcrypt.compare(password, existingUser.password);
        if (!passwordMatch) {
            return res.status(400).json({ error: "Invalid password" });
        }
        const token = generateToken({ existingUser, rememberMe });
        res.status(200).json({ message: "Logged in successfully", token });
    } catch (error) {
        console.error("Unable to login:", error);
        res.status(500).json({ error: "Internal server error" });
    }
};

exports.loggedInUser = async(req, res) => {
    try {
        const token = req.headers.authorization.split(" ")[1];
        const decodedToken = jwt.verify(token, 'tokenkey');
        res.status(200).json({ message: "User data returned successfully", decodedToken })
    } catch (error) {
        res.status(500).json({ error: "Unable to fetch user data" });
    }
}

const generateToken = (user) => {
    const payload = {
        email: user.existingUser.email,
        id: user.existingUser.id,
    };

    // Sign the token using a secret key and specify an expiration time (optional)
    if (user.rememberMe) {
        return jwt.sign(payload, 'tokenkey', { expiresIn: '30d' });
    }

    return jwt.sign(payload, 'tokenkey', { expiresIn: '1h' });
};