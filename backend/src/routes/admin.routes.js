const express = require("express");

const router = express.Router();

const auth = require("../middleware/auth");
const admin = require("../middleware/admin");

const {
  dashboard
} = require(
  "../controllers/admin.controller"
);

router.get(
  "/dashboard",
  auth,
  admin,
  dashboard
);

module.exports = router;
