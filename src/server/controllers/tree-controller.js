const jeyoDistans = require("jeyo-distans");

import {MAX_DISTANCE} from "../data/constants";

import Trees from "../models/tree-model";

export const getAllTrees = async (req, res) => {
    await Trees.find({}, (err, list) => {
        if (err) {
            return res.status(400).json({success: false, error: err});
        }
        return res.status(200).json({success: true, data: list});
    }).catch((err) => console.log(err));
};

export const getTreeById = async (req, res) => {
    await Trees.findOne({arbotag: req.params.arbotag}, (err, tree) => {
        if (err) {
            return res.status(400).json({success: false, error: err});
        }
        return res.status(200).json({success: true, data: tree});
    }).catch((err) => console.log(err));
};

export const getNearbyTrees = async (req, res) => {
    console.log("center: ", [req.params.lat, req.params.lon]);
    console.log("new coords, gt: ", [
        parseFloat(req.params.lat) - MAX_DISTANCE,
        parseFloat(req.params.lon) - MAX_DISTANCE * parseFloat(req.params.lat),
    ]);
    console.log("lt: ", [
        parseFloat(req.params.lat) + MAX_DISTANCE,
        parseFloat(req.params.lon) + MAX_DISTANCE * parseFloat(req.params.lat),
    ]);
    console.log(
        "jeyo: ",
        jeyoDistans([req.params.lat, req.params.lon], [50, 5.567]),
    );
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
    );
};
