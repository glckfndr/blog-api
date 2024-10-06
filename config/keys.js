const { mongo } = require("mongoose");

const { PORT } = process.env;
const { MONGO_URL } = process.env;

module.exports = { port: PORT, mongoURL: MONGO_URL };
