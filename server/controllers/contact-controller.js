const Contact = require("../models/contact-model");

const contact = async (req, res) => {
  try {
    const { username, email, phone, message } = req.body;

    await Contact.create({
      username,
      email,
      phone,
      message,
    });
    return res.status(200).send({
      message:
        "We've received your message. Will get back to you as soon as possible.",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "An error occurred while contacting" });
  }
};

module.exports = { contact };
