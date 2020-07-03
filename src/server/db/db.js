/* becodeorg/mwenbwa
 *
 * /src/server/db/db.js - Database connection
 *
 * coded by Dorian Goffette
 * started at 01/06/2020
 */

const mongoose = require("mongoose");
const {DB_USERNAME, DB_PASSWORD} = process.env;

const dist =
    "mongodb+srv://@cluster0.trrcd.mongodb.net/mwenbwa?retryWrites=true&w=majority";

mongoose
    .connect(dist, {
        user: DB_USERNAME,
        pass: DB_PASSWORD,
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .catch(e => {
        console.error("Connection error", e.message);
    });

const db = mongoose.connection;
export default db;
