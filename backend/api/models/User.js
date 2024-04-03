const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: { type: String, unique: true },
  password: String,
  email: { type: String, unique: true },
  birthDate: Date,
  gender: String,
  accountCreationDate: { type: Date, default: Date.now },
});

module.exports = mongoose.model("User", userSchema, "Users");
