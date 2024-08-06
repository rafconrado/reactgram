const User = require("../models/User");

const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const jwtSecret = process.env.JWT_SECRET;

// gerenate user token
const generateToken = (id) => {
  return jwt.sign({ id }, jwtSecret, {
    expiresIn: "7d",
  });
};

//register user and sign in
const register = async (req, res) => {
 
   const {name, email, password} = req.body

   //check if user exists
   const user = await User.findOne({email})

   if(user) {
    res.status(422).json({errors: [ ]})
   }

};

module.exports = {
  register,
};
