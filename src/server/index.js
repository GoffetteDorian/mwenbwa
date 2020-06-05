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
} from "./controllers/tree-controller";

const {APP_PORT} = process.env;

const app = express();

app.use(express.static(path.resolve(__dirname, "../../bin/client")));

db.on("error", console.error.bind(console, "mongodb connection error!"));

app.get("/trees/:lat/:lon", getNearbyTrees);

app.get("/trees", getAllTrees);

app.get("/trees/:arbotag", getTreeById);

// app.get("/trees", (req, res) => {
//     console.log(`ℹ️  (${req.method.toUpperCase()}) ${req.url}`);
//     res.send("trees");
// });
app.listen(APP_PORT, () =>
    console.log(`🚀 Server is listening on port ${APP_PORT}.`),
);
