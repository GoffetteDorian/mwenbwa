// eslint-disable consistent-return
import Users from "../models/user-model";
// import Trees from "../models/tree-model";
import {ROUNDS} from "../data/constants";

import {setTreeOwner} from "./tree-controller";
// import {setLeavesByUsername} from "./user-controller";
// require("dotenv").config();

const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const {SECRET} = process.env;

export const signup = async (req, res) => {
    try {
        const password = await bcrypt.hash(req.body.password, ROUNDS);
        const user = new Users({
            username: req.body.username,
            password,
            email: req.body.email,
            role: "user",
            color: req.body.color,
            leaves: req.body.leaves,
            trees: req.body.trees,
        });

        const response = await user.save();

        setTreeOwner(response);
        setTreeOwner(response);
        setTreeOwner(response);
        return res.status(201).send({message: "User created"});
    } catch (error) {
        console.log(error);
        return res.status(500).send({message: error});
    }
};

export const signin = async (req, res) => {
    try {
        const {
            id,
            email,
            username,
            password,
            role,
            color,
            leaves,
            trees,
        } = await Users.findOne({
            email: req.body.email,
        });
        if (!email) {
            return res.status(404).send({message: "No user found"});
        }
        const validation = await bcrypt.compare(req.body.password, password);
        if (!validation) {
            return res
                .status(401)
                .send({token: null, message: "Wrong password"});
        }
        const token = jwt.sign({id}, SECRET, {expiresIn: 86400});

        return res.status(200).send({
            id,
            email,
            username,
            password,
            role,
            color,
            token,
            leaves,
            trees,
        });
    } catch (error) {
        console.log(error);
        return res.status(500).send({error});
    }
};
