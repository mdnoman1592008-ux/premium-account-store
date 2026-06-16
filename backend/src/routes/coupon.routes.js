const express =
require("express");

const router =
express.Router();

const auth =
require("../middleware/auth");

const admin =
require("../middleware/admin");

const {
  validateCoupon,
  createCoupon
} = require(
  "../controllers/coupon.controller"
);

router.post(
  "/validate",
  validateCoupon
);

router.post(
  "/create",
  auth,
  admin,
  createCoupon
);

module.exports = router;
