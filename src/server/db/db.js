/* becodeorg/mwenbwa
 *
 * /src/server/db/db.js - Database connection
 *
 * coded by Dorian Goffette
 * started at 01/06/2020
 */

const mongoose = require("mongoose");

// require("dotenv").config();

mongoose
    .connect("mongodb://mongo:27017/mwenbwa", {
        auth: {authSource: "admin"},
        user: "dev",
        pass: "dev",
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .catch(e => {
        console.error("Connection error", e.message);
    });

const db = mongoose.connection;
export default db;
