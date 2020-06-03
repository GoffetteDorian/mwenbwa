const Trees = require("../models/tree-model");

const getAllTrees = async (req, res) => {
    await Trees.find({}, (err, list) => {
        if (err) {
            return res.status(400).json({success: false, error: err});
        }
        return res.status(200).json({success: true, data: list});
    }).catch((err) => console.log(err));
};

const getTreeById = async (req, res) => {
    await Trees.findOne({arbotag: req.params.arbotag}, (err, tree) => {
        if (err) {
            return res.status(400).json({success: false, error: err});
        }
        return res.status(200).json({success: true, data: tree});
    }).catch((err) => console.log(err));
};

module.exports = {getTreeById, getAllTrees};
