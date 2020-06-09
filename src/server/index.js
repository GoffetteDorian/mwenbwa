/* becodeorg/mwenbwa
 *
 * /src/server/index.js - Server entry point
 *
 * coded by leny@BeCode
 * started at 18/05/2020
 */

import express from "express";
import path from "path";

import db from "./db/db";

import {
    getAllTrees,
    getNearbyTrees,
    getTreeById,
    getTreeByOwner,
} from "./controllers/tree-controller";

import {
    getAllUsers,
    // getUserById,
    getUserByUsername,
} from "./controllers/user-controller";

const {APP_PORT} = process.env;

const app = express();

app.use(express.static(path.resolve(__dirname, "../../bin/client")));

db.on("error", console.error.bind(console, "mongodb connection error!"));

// ROUTES
app.get("/trees/nearby/:lat/:lon", getNearbyTrees);

app.get("/trees", getAllTrees);

app.get("/trees/id/:arbotag", getTreeById);

app.get("/trees/owner/:owner", getTreeByOwner);

app.get("/users", getAllUsers);

app.get("/users/:username", getUserByUsername);

app.listen(APP_PORT, () =>
    console.log(`🚀 Server is listening on port ${APP_PORT}.`),
);
