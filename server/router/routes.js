const express = require("express");
const router = express.Router();
const { signup } = require("../controllers/signup-controller");
const { signin } = require("../controllers/signin-controller");
const { home } = require("../controllers/home-controller");
const validate = require("../middlewares/validate-middleware");
const signupSchema = require("../validators/signup-validation");
const { contact } = require("../controllers/contact-controller");
const contactSchema = require("../validators/contact-validation");

router.route("/signup").post(validate(signupSchema), signup);
router.route("/signin").post(signin);
router.route("/").get(home);
router.route("/home").get(home);
router.route("/contact").post(validate(contactSchema), contact);

module.exports = router;
