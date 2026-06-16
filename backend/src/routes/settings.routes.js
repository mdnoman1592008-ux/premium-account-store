const express = require("express");

const router = express.Router();

const auth = require("../middleware/auth");
const admin = require("../middleware/admin");

const {
  getSettings,
  updateSettings
} = require("../controllers/settings.controller");

router.get("/", getSettings);

router.put(
  "/",
  auth,
  admin,
  updateSettings
);

module.exports = router;
