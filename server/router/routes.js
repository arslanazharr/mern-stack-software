const express = require("express");
const router = express.Router();
const { register } = require('../controllers/auth-controller');
const { home } = require('../controllers/home-controller');

router.route("/register").post(register);
router.route("/").get(home);
router.route("/home").get(home);

module.exports = router;
