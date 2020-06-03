/* becodeorg/mwenbwa
 *
 * /src/server/index.js - Server entry point
 *
 * coded by leny@BeCode
 * started at 18/05/2020
 */

import React from "react";
import express from "express";
import path from "path";
import {renderToString} from "react-dom/server";

import App from "../client/app";

const db = require("./db/db");
const treeCtrl = require("./controllers/tree-controller");

const {APP_PORT} = process.env;

const app = express();

app.use(express.static(path.resolve(__dirname, "../../bin/client")));

db.on("error", console.error.bind(console, "mongodb connection error!"));

app.get("/map", renderToString(<App />));

app.get("/trees", treeCtrl.getAllTrees);

app.get("/trees/:arbotag", treeCtrl.getTreeById);

// app.get("/trees", (req, res) => {
//     console.log(`ℹ️  (${req.method.toUpperCase()}) ${req.url}`);
//     res.send("trees");
// });
app.listen(APP_PORT, () =>
    console.log(`🚀 Server is listening on port ${APP_PORT}.`),
);
