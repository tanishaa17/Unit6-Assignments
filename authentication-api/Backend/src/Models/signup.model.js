require("dotenv").config();
const mongoose = require("mongoose");
const signupSchema = new mongoose.Schema({
    id: { type: Number, required: true, unique: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    displayName: { type: String, required: false },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    country: { type: String, required: true }
}, {
    versionKey: false,
    timestamps: true
});
module.exports = mongoose.model("signup", signupSchema);