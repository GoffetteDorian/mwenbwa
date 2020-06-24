/* becodeorg/mwenbwa
 *
 * /src/server/routes/tree-routes.js - Tree routes
 *
 * coded by Dorian Goffette
 * started at 01/06/2020
 */

const express = require("express");
const router = express.Router();

import {
    getAllTrees,
    getNearbyTrees,
    getTreeById,
    getTreeByOwner,
    setTreeOwner,
    updateAllOwners,
} from "../controllers/tree-controller";

router.get("/nearby/:lat/:lon", getNearbyTrees);
router.get("/all", getAllTrees);
router.get("/id/:arbotag", getTreeById);
router.get("/owner/:owner", getTreeByOwner);
router.post("/set/owner/", setTreeOwner);
router.get("/update/", updateAllOwners);

module.exports = router;
