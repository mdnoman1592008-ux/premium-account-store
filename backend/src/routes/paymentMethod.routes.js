const express = require("express");

const router = express.Router();

const auth = require("../middleware/auth");
const admin = require("../middleware/admin");

const {
  getMethods,
  createMethod
} = require(
  "../controllers/paymentMethod.controller"
);

router.get("/", getMethods);

router.post(
  "/",
  auth,
  admin,
  createMethod
);

module.exports = router;
