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
