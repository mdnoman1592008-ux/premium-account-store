const express = require("express");

const router = express.Router();

const auth = require("../middleware/auth");
const admin = require("../middleware/admin");

const {
  getDashboard
} = require(
  "../controllers/dashboard.controller"
);

router.get(
  "/",
  auth,
  admin,
  getDashboard
);

module.exports = router;
