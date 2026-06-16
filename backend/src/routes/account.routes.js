const express =
require("express");

const router =
express.Router();

const auth =
require("../middleware/auth");

const {
  myAccounts,
  accountDetails
} = require(
  "../controllers/account.controller"
);

router.get(
  "/my",
  auth,
  myAccounts
);

router.get(
  "/:id",
  auth,
  accountDetails
);

module.exports = router;
