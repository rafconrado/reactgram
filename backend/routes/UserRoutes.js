const express = require("express");
const router = express.Router();

//controler
const { register } = require("../controlles/userController");

//routes
router.post("/register", register);

module.exports = router;
