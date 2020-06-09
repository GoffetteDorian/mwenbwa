/* becodeorg/mwenbwa
 *
 * /src/server/index.js - Server entry point
 *
 * coded by Dorian Goffette
 * started at 18/05/2020
 */

import express from "express";
import path from "path";

import db from "./db/db";

const users = require("./routes/user-routes.js");
const trees = require("./routes/tree-routes.js");

const {APP_PORT} = process.env;

const app = express();

app.use(express.static(path.resolve(__dirname, "../../bin/client")));

db.on("error", console.error.bind(console, "mongodb connection error!"));

app.use("/api/users", users);
app.use("/api/trees", trees);

app.listen(APP_PORT, () =>
    console.log(`🚀 Server is listening on port ${APP_PORT}.`),
);
