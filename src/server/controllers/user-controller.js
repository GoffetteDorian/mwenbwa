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
    await Users.find({_id: req.params.id}, (err, list) => {
        if (err) {
            return res.status(400).json({success: false, error: err});
        }
        return res.status(200).json({success: true, data: list});
    }).catch(err => console.log(err));
};

export const getUserByUsername = async (req, res) => {
    await Users.find({username: req.params.username}, (err, list) => {
        if (err) {
            return res.status(400).json({success: false, error: err});
        }
        return res.status(200).json({success: true, data: list});
    }).catch(err => console.log(err));
};
