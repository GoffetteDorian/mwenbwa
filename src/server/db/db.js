/* becodeorg/mwenbwa
 *
 * /src/server/db/db.js - Database connection
 *
 * coded by Dorian Goffette
 * started at 01/06/2020
 */

const mongoose = require("mongoose");

// require("dotenv").config();
// const loc = "mongodb://mongo:27017/mwenbwa";
const dist =
    "mongodb+srv://@cluster0.trrcd.mongodb.net/mwenbwa?retryWrites=true&w=majority";

mongoose
    .connect(dist, {
        // auth: {authSource: "admin"},
        user: "dev",
        pass: "dev",
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .catch(e => {
        console.error("Connection error", e.message);
    });

const db = mongoose.connection;
console.log("DB LOGIN: ", db);
export default db;
