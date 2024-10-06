const mongoose = require("mongoose");
const { mongoURL } = require("../config/keys");

// connect to the database
const connectDB = async () => {
  try {
    await mongoose.connect(mongoURL);
    console.log("Mongo blogDB connected successfully");
  } catch (error) {
    console.log("Error connecting to the blogDB database");
  }
};

module.exports = connectDB;
