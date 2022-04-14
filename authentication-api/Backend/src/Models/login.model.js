require("dotenv").config();
const mongoose = require("mongoose");
const loginSchema = new mongoose.Schema({
    email: [{ type: mongoose.Schema.Types.ObjectId, ref: "signup", required: true }],
    password: [{ type: mongoose.Schema.Types.ObjectId, ref: "signup", required: true }]
}, {
    versionKey: false,
    timestamps: true
});
module.exports = mongoose.model("login", loginSchema);