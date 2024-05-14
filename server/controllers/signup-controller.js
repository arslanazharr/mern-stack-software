const User = require("../models/user-model");

const signup = async (req, res) => {
  try {
    const { username, email, phone, password } = req.body;

    const userExists = await User.findOne({ email: email });

    if (userExists) {
      return res
        .status(400)
        .send({ message: "User with this email already exists" });
    } else {
      const userCreated = await User.create({
        username,
        email,
        phone,
        password,
      });
      return res.status(200).send({
        message: "User registered successfully",
        token: await userCreated.generateToken(),
        userId: userCreated._id.toString(),
      });
    }
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .send({ message: "An error occurred while registering user" });
  }
};

module.exports = { signup };
