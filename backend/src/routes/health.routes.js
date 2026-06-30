const express = require("express");
const router = express.Router();

const { checkDatabase } = require("../controllers/health.controller");

router.get("/db", checkDatabase);

module.exports = router;
