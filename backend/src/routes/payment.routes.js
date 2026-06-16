const express = require("express");

const router = express.Router();

const auth = require("../middleware/auth");
const admin = require("../middleware/admin");

const upload =
  require("../middleware/upload");

const {
  submitPayment,
  getPayments,
  approvePayment,
  rejectPayment
} = require(
  "../controllers/payment.controller"
);

router.post(
  "/submit",
  auth,
  upload.single("screenshot"),
  submitPayment
);

router.get(
  "/all",
  auth,
  admin,
  getPayments
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

module.exports = router;
