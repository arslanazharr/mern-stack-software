const User = require("../models/user-model");

const register = async (req, res) => {
    try {
        const { username, email, phone, password } = req.body;

        const userExists = await User.findOne({ email: email });

        if (userExists) {
            return res.status(400).send({ message: "User with this email already exists" });
        } else {
            const newUser = await User.create({
                username,
                email,
                phone,
                password
            });
            return res.status(200).send({ message: "User registered successfully" });
        }
    } catch (error) {
        console.log(error);
        res.status(500).send({ message: "An error occurred while registering user" });
    }
};

module.exports = { register };
