const express = require("express");

const router = express.Router();

const auth = require("../middleware/auth");
const admin = require("../middleware/admin");

const {
  getApps,
  getApp,
  createApp,
  updateApp,
  deleteApp
} = require("../controllers/app.controller");

router.get("/", getApps);

router.get("/:id", getApp);

router.post(
  "/",
  auth,
  admin,
  createApp
);

router.put(
  "/:id",
  auth,
  admin,
  updateApp
);

router.delete(
  "/:id",
  auth,
  admin,
  deleteApp
);

module.exports = router;
