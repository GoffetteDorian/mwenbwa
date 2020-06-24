import Users from "../models/user-model";
// import Trees from "../models/tree-model";
import {ROUNDS} from "../data/constants";

// require("dotenv").config();

const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const accessTokenSecret = "Mwenbwa is awesome as a secret";

export const signup = async (req, res) => {
    try {
        const password = await bcrypt.hash(req.body.password, ROUNDS);
        const user = new Users({
            username: req.body.username,
            password,
            email: req.body.email,
            role: "user",
            color: req.body.color,
        });

        const newUser = await user.save();

        return res.status(201).send({user: newUser});
    } catch (error) {
        console.log(error);
        return res.status(500).send({error});
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
        const token = jwt.sign({id}, accessTokenSecret, {expiresIn: 86400});

        return res
            .status(200)
            .send({id, email, username, password, role, color, token});
    } catch (error) {
        console.log(error);
        return res.status(500).send({error});
    }
};
