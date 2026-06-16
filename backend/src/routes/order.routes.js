const express = require("express");

const router = express.Router();

const auth = require("../middleware/auth");
const admin = require("../middleware/admin");

const {
  createOrder,
  getMyOrders,
  getAllOrders,
  approveOrder,
  rejectOrder
} = require("../controllers/order.controller");

router.post(
  "/create",
  auth,
  createOrder
);

router.get(
  "/my-orders",
  auth,
  getMyOrders
);

router.get(
  "/all",
  auth,
  admin,
  getAllOrders
);

router.put(
  "/approve/:id",
  auth,
  admin,
  approveOrder
);

router.put(
  "/reject/:id",
  auth,
  admin,
  rejectOrder
);

module.exports = router;
