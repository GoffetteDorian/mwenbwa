/* becodeorg/mwenbwa
 *
 * /src/server/controllers/user-controller.js - User controller
 *
 * coded by Dorian Goffette
 * started at 01/06/2020
 */
import Users from "../models/user-model";

export const getAllUsers = async (req, res) => {
    await Users.find({}, (err, list) => {
        if (err) {
            return res.status(400).json({success: false, error: err});
        }
        return res.status(200).json({success: true, data: list});
    }).catch(err => console.log(err));
};

export const getUserById = async (req, res) => {
    await Users.findOne({_id: req.params.id}, (err, user) => {
        if (err) {
            return res.status(400).json({success: false, error: err});
        }
        return res.status(200).json({success: true, data: user});
    }).catch(err => console.log(err));
};

export const getUserByUsername = async (req, res) => {
    await Users.findOne({username: req.params.username}, (err, user) => {
        if (err) {
            return res.status(400).json({success: false, error: err});
        }
        return res.status(200).json({success: true, data: user});
    }).catch(err => console.log(err));
};

export const setLeavesByUsername = async (req, res) => {
    try {
        const user = await Users.updateOne(
            {username: req.username},
            {$set: {leaves: req.leaves}},
        );
        return res.status(201).send({user});
    } catch (error) {
        return res.status(500).send(error);
    }
};
