const mongoose = require("mongoose");
const express = require("express");
const { Signup } = require("../Frontend/src/Components/Signup");
const { Login } = require("../Frontend/src/Components/Login");
const app = express();
app.use(express.json());

require("dotenv").config();

app.use("/signup", Signup);
app.use("/login", Login);


let db = process.env.MongoURL;
if (db) {
    mongoose.connect(db).then(() => {
        console.log("Connected to server");
    }).catch((err) => {
        console.log({ "Unable to Connect": err });
    })
}