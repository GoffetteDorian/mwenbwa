/* becodeorg/mwenbwa
 *
 * /src/server/index.js - Server entry point
 *
 * coded by Dorian Goffette
 * started at 18/05/2020
 */

import express from "express";
import path from "path";

require("dotenv").config();

import db from "./db/db";

const bodyParser = require("body-parser");

const auth = require("./routes/auth-routes.js");
const users = require("./routes/user-routes.js");
const trees = require("./routes/tree-routes.js");

const {APP_PORT, PORT} = process.env;

const app = express();

app.use(express.static(path.resolve(__dirname, "../../bin/client")));

db.on("error", console.error.bind(console, "mongodb connection error!"));

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "http://localhost");
    res.setHeader("Access-Control-Allow-Headers", "Content-type,Authorization");
    next();
});

// Setting up bodyParser to use json and set it to req.body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use("/api/auth", auth);
app.use("/api/users", users);
app.use("/api/trees", trees);

app.listen(PORT || APP_PORT, () =>
    console.log(`🚀 Server is listening on port ${PORT || APP_PORT}.`),
);
