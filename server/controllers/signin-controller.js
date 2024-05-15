const User = require("../models/user-model");

const signin = async (req, res) => {
  try {
    const { email, password } = req.body;

    const userExists = await User.findOne({ email: email });

    if (!userExists) {
      return res.status(400).send({ message: "Invalid email or password" });
    } else {
      const user = await userExists.comparePassword(password);

      if (user) {
        res.status(200).send({
          message: "Login Successful",
          token: await userExists.generateToken(),
          username: userExists.username,
          userId: userExists._id.toString(),
        });
      } else {
        res.status(401).send({ message: "Invalid email or password" });
      }
    }
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .send({ message: "An error occurred while registering user" });
  }
};

module.exports = { signin };
