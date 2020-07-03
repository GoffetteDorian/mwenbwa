/* becodeorg/mwenbwa
 *
 * /src/server/controllers/tree-controller.js - Tree controller
 *
 * coded by Dorian Goffette
 * started at 01/06/2020
 */

// const jeyoDistans = require("jeyo-distans");

import {MAX_DISTANCE} from "../data/constants";

import Trees from "../models/tree-model";

export const getAllTrees = async (req, res) => {
    await Trees.find({}, (err, list) => {
        if (err) {
            return res.status(400).json({success: false, error: err});
        }
        return res.status(200).json({success: true, data: list});
    }).catch(err => console.log(err));
};

export const getTreeById = async (req, res) => {
    console.log(req.body);
    await Trees.findOne({arbotag: req.params.arbotag}, (err, tree) => {
        if (err) {
            return res.status(400).json({success: false, error: err});
        }
        return res.status(200).json({success: true, data: tree});
    }).catch(err => console.log(err));
};

export const getNearbyTrees = async (req, res) => {
    await Trees.find(
        {
            "geoloc.lat": {
                $gt: parseFloat(req.params.lat) - MAX_DISTANCE,
                $lt: parseFloat(req.params.lat) + MAX_DISTANCE,
            },
            "geoloc.lon": {
                $gt:
                    parseFloat(req.params.lon) -
                    MAX_DISTANCE * Math.cos(parseFloat(req.params.lat)),
                $lt:
                    parseFloat(req.params.lon) +
                    MAX_DISTANCE * Math.cos(parseFloat(req.params.lat)),
            },
        },
        (err, trees) => {
            if (err) {
                return res.status(400).json({success: false, error: err});
            }
            return res.status(200).json({success: true, data: trees});
        },
    ).catch(err => console.log(err));
};

export const getTreeByOwner = async (req, res) => {
    await Trees.find({owner: req.params.owner}, (err, list) => {
        if (err) {
            return res.status(400).json({success: false, error: err});
        }
        return res.status(200).json({success: true, data: list});
    }).catch(err => console.log(err));
};

export const setTreeOwner = async (req, res) => {
    try {
        // const tree = await Trees.findOne({owner: null});
        // console.log(tree);
        const newTree = await Trees.updateOne(
            {owner: null},
            {$set: {owner: req.username}},
        );
        return res.status(201).send({tree: newTree});
    } catch (error) {
        return res.status(500).send(error);
    }
};

// DB SET UP
export const updateAllOwners = async (req, res) => {
    try {
        const response = await Trees.update(
            {},
            {$set: {owner: null}},
            {multi: true},
        );

        return res
            .status(201)
            .send({message: "Updated all owners", data: response});
    } catch (error) {
        return res.status(500).send({error});
    }
};
