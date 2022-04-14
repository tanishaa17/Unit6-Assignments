const crudController = require("./crud.controller");
const bcrypt = require("bcrypt");
const jsonwebtoken = require("jsonwebtoken");
const Login = require("../Models/login.model");
const express = require("express");
const router = express.Router();

router.post("", crudController(Login).post);
module.exports = router;