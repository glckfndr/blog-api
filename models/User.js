const { name } = require("body-parser");
const mongoose = require("mongoose");
const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true, trim: true },
    password: { type: String, required: true, minlength: 6 },
    // role: 1 => super admin, admin => 2, user => 3
    role: { type: Number, default: 3 },
  },
  { timestamps: true }
);
const User = mongoose.model("User", userSchema);
module.exports = User;
