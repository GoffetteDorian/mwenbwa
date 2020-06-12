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

const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");
const exjwt = require("express-jwt");

// const users = require("./routes/user-routes.js");
// const trees = require("./routes/tree-routes.js");

const {APP_PORT} = process.env;

const app = express();

app.use(express.static(path.resolve(__dirname, "../../bin/client")));

db.on("error", console.error.bind(console, "mongodb connection error!"));

// See the react auth blog in which cors is required for access
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "http://localhost");
    res.setHeader("Access-Control-Allow-Headers", "Content-type,Authorization");
    next();
});

// Setting up bodyParser to use json and set it to req.body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

const jwtMW = exjwt({secret: "keyboard cat 4 ever"});

const users = [
    {id: 1, username: "test", password: "123456789"},
    {id: 2, username: "tset", password: "987654321"},
];

app.post("/login", (req, res) => {
    const {username, password} = req.body;
    //USE DB LOGIC TO FIND USER AND COMPARE PW
    for (const user of users) {
        // USE PW HASH CHECKING LOGIC HERE
        if (username === user.username && password === user.password) {
            //if all credentials are correct do this:
            const token = jwt.sign(
                {id: user.id, username: user.username},
                "keyboard cat 4 ever",
                {expiresIn: 129600},
            );
            res.json({success: true, err: null, token});
            break;
        } else {
            res.status(401).json({
                success: false,
                token: null,
                err: "Username or password is incorrect!",
            });
        }
    }
});

app.get("/", jwtMW, (req, res) => {
    res.send("You are auth");
});

// Error handling
app.use((err, req, res, next) => {
    if (err.name === "UnauthorizedError") {
        res.status(401).send(err);
    } else {
        next(err);
    }
});

// app.use("/api/users", users);
// app.use("/api/trees", trees);

app.listen(APP_PORT, () =>
    console.log(`🚀 Server is listening on port ${APP_PORT}.`),
);
