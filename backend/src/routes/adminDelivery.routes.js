const express =
require("express");

const router =
express.Router();

const auth =
require("../middleware/auth");

const admin =
require("../middleware/admin");

const {
  deliveryHistory
} = require(
  "../controllers/adminDelivery.controller"
);

router.get(
  "/history",
  auth,
  admin,
  deliveryHistory
);

module.exports = router;
