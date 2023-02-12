const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();

const User = require("../models/users");

router.get("/user", async (req, res) => {
  const user = await User.find();
  res.json(user);
});
router.post("/create", async (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const password = req.body.password;

  const newUser = new User({
    name,
    email,
    password,
  });
  await newUser.save();
  res.status(200).json(newUser);
});

module.exports = router;
