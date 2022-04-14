const jwt = require("jsonwebtoken");
require("dotenv").config();

function isAuthenticated(req, res, next) {
    const token = req.header("x-auth-token");
    if (!token) return res.status(401).send("Access denied. Not authorized...");
    try {
        const jwtSecretKey = process.env.AUTHENICATION_API_JWT_SECRET_KEY;
        const decoded = jwt.verify(token, jwtSecretKey);
        req.user = decoded;
        next();
    } catch (err) {
        res.status(400).send("Invalid auth token...");
    }
}
module.exports = isAuthenticated;