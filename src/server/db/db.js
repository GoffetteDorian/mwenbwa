const mongoose = require("mongoose");

require("dotenv").config();

mongoose
    .connect("mongodb://mongo:27017/mwenbwa", {
        auth: {authSource: "admin"},
        user: "dev",
        pass: "dev",
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .catch((e) => {
        console.error("Connection error", e.message);
    });

const db = mongoose.connection;
module.exports = db;
