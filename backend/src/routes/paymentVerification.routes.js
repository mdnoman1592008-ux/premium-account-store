const express =
require("express");

const router =
express.Router();

const auth =
require("../middleware/auth");

const admin =
require("../middleware/admin");

const {
  approvePayment,
  rejectPayment
} = require(
  "../controllers/paymentVerification.controller"
);

router.put(
  "/approve/:id",
  auth,
  admin,
  approvePayment
);

router.put(
  "/reject/:id",
  auth,
  admin,
  rejectPayment
);

module.exports =
router;
