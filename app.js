const express = require("express");
const bodyParser = require("body-parser");

const dotenv = require("dotenv");
dotenv.config();
const morgan = require("morgan");

const connectDB = require("./db/connectDB");
const { authRoute } = require("./routes");

const app = express();
connectDB();
app.use(express.json({ limit: "500mb" }));
app.use(bodyParser.urlencoded({ limit: "500mb", extended: true }));
app.use(morgan("dev"));

// routes section

app.use("/api/v1/auth", authRoute);

module.exports = app;
