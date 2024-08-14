const User = requie("../models/User");
const jwt = require("jsonwebtoken");
const jwtSecret = process.env.JWT_SECRET;

const authGuard = (req, res, next) => {
    cont authHeader = req.headers["authorization"]
};
