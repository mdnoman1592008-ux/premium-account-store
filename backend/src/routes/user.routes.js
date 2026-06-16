const express = require("express");

const router = express.Router();

const auth = require("../middleware/auth");
const admin = require("../middleware/admin");

const {
  getUsers,
  getUser,
  blockUser
} = require("../controllers/user.controller");

router.get(
  "/",
  auth,
  admin,
  getUsers
);

router.get(
  "/:id",
  auth,
  admin,
  getUser
);

router.put(
  "/block/:id",
  auth,
  admin,
  blockUser
);

module.exports = router;
