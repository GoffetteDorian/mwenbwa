/* becodeorg/mwenbwa
 *
 * /src/server/routes/user-routes.js - User routes
 *
 * coded by Dorian Goffette
 * started at 01/06/2020
 */

const express = require("express");
const router = express.Router();

import {
    getAllUsers,
    getUserByUsername,
    getUserById,
} from "../controllers/user-controller";

router.get("/all", getAllUsers);
router.get("/username/:username", getUserByUsername);
router.get("/id/:id", getUserById);

module.exports = router;
