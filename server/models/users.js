
const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
});

const Users = mongoose.model("Users", schema);

module.exports = Users;
