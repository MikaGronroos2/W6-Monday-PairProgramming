const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

// Login User
router.post("/login", userController.loginUser);

// Signup User
router.post("/signup", userController.signupUser);

module.exports = router;
