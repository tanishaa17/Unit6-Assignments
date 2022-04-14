const crudController = require("./crud.controller");
const bcrypt = require("bcrypt");
const jsonwebtoken = require("jsonwebtoken");
const Signup = require("../Models/signup.model");
const express = require("express");
const router = express.Router();

router.post("", crudController(Signup).post);
module.exports = router;