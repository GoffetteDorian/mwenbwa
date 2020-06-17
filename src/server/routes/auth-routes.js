const express = require("express");
const router = express.Router();

import {
    authenticateJWT,
    login,
    logout,
    newToken,
    tokens,
    test,
    signup,
    signin,
} from "../controllers/auth-controller";

router.post("/signup", signup);
router.post("/signin", signin);
router.post("/login", login);
router.post("/logout", logout);
router.post("/token", newToken);
router.get("/tokens", tokens);
router.get("/test", authenticateJWT, test);

module.exports = router;
