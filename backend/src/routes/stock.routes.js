const express =
require("express");

const router =
express.Router();

const {
  stockInfo
} = require(
  "../controllers/stock.controller"
);

router.get(
  "/",
  stockInfo
);

module.exports =
router;
