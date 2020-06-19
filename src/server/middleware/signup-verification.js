import Users from "../models/user-model";

export const verifyDuplicateCredentials = async (req, res, next) => {
    try {
        const email = await Users.findOne({email: req.body.email});

        const username = await Users.findOne({
            username: req.body.username,
        });
        if (email || username) {
            return res.status(400).send({
                message: `Someone already use ${
                    email.email || username.username
                }`,
            });
        }

        next();
        return res.status(200);
    } catch (error) {
        console.log(error);
        return res.status(500).send({message: error});
    }
};
