const express = require("express");
const router = express.Router();
const {createUser,logUser} = require("../Controllers/UserControler")

router.route("/registration").post(createUser);

router.route("/login").post(logUser);

module.exports = router;