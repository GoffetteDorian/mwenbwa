import Users from "../models/user-model";
import {ROUNDS} from "../data/constants";

const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// const users = [
//     {id: 1, username: "test", password: "123456789", role: "admin"},
//     {id: 2, username: "tset", password: "987654321", role: "member"},
// ];

// const tmptrees = [];

const accessTokenSecret = "Mwenbwa is awesome as a secret";
// const refreshTokenSecret = "refresh token secret 123";
// let refreshTokens = [];

// export const authenticateJWT = (req, res, next) => {
//     const authHeader = req.headers.authorization;
//     if (authHeader) {
//         const token = authHeader.split(" ")[1];
//         jwt.verify(token, accessTokenSecret, (err, user) => {
//             if (err) {
//                 return res.sendStatus(403);
//             }
//             req.user = user;
//             return next();
//         });
//     } else {
//         res.sendStatus(401);
//     }
// };

// export const login = (req, res) => {
//     // Read username and password from request body
//     const {username, password} = req.body;

//     // Filter user from the users array by username and password
//     const user = users.find(
//         u => u.username === username && u.password === password,
//     );

//     if (user) {
//         // Generate an access token
//         const accessToken = jwt.sign(
//             {username: user.username, role: user.role},
//             accessTokenSecret,
//             {expiresIn: "20m"},
//         );
//         const refreshToken = jwt.sign(
//             {username: user.username, role: user.role},
//             refreshTokenSecret,
//         );

//         refreshTokens.push(refreshToken);

//         res.json({
//             accessToken,
//             refreshToken,
//         });
//     } else {
//         res.send("Username or password incorrect");
//     }
// };

// export const newToken = (req, res) => {
//     const {token} = req.body;
//     // console.log("req.body: ", req.body);
//     // console.log(refreshTokens);
//     if (!token) {
//         return res.sendStatus(401);
//     }
//     if (!refreshTokens.includes(token)) {
//         return res.sendStatus(403);
//     }
//     jwt.verify(token, refreshTokenSecret, (err, user) => {
//         if (err) {
//             return res.sendStatus(403);
//         }
//         const accessToken = jwt.sign(
//             {
//                 username: user.username,
//                 role: user.role,
//             },
//             accessTokenSecret,
//             {expiresIn: "20m"},
//         );
//         return res.json({accessToken});
//     });
//     return res.sendStatus(200);
// };

// export const logout = (req, res) => {
//     const {token} = req.body;
//     refreshTokens = refreshTokens.filter(t => t === token);
//     // console.log(refreshTokens);
//     res.json({
//         token,
//         refreshTokens,
//         msg: "Successfully logged out",
//     });
// };

// export const tokens = (req, res) => {
//     res.json({refreshtokens: refreshTokens});
// };

// export const test = (req, res) => {
//     const {role} = req.user;
//     if (role !== "admin") {
//         return res.sendStatus(403);
//     }
//     const atrees = req.body;
//     tmptrees.push(atrees);
//     return res.send("tree added succesfully");
// };

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
