const express = require("express");
const router = express.Router();

//controler
const { register } = require("../controlles/userController");

//middlewares
const validate = require("../middlewares/handleValidation");
const {userCreateValidation} = require("../middlewares/userValidation")

//routes
router.post("/register", userCreateValidation(), validate, register);

module.exports = router;
