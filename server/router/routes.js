const express = require("express");
const router = express.Router();
const { signup } = require("../controllers/signup-controller");
const { signin } = require("../controllers/signin-controller");
const { home } = require("../controllers/home-controller");
const validate = require("../middlewares/validate-middleware");
const signupSchema = require("../validators/signup-validation");

router.route("/signup").post(validate(signupSchema), signup);
router.route("/signin").post(signin);
router.route("/").get(home);
router.route("/home").get(home);

module.exports = router;
