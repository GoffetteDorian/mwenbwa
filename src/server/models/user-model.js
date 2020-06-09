/* becodeorg/mwenbwa
 *
 * /src/server/models/user-model.js - User model
 *
 * coded by Dorian Goffette
 * started at 01/06/2020
 */

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const User = new Schema(
    {
        username: {type: String},
        password: {type: String},
        color: {type: String},
    },
    {collection: "users"},
);

export default mongoose.model("Users", User);
