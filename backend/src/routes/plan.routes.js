const express = require("express");

const router = express.Router();

const auth = require("../middleware/auth");
const admin = require("../middleware/admin");

const {
  getPlans,
  getPlan,
  createPlan,
  updatePlan,
  deletePlan
} = require("../controllers/plan.controller");

router.get("/", getPlans);

router.get("/:id", getPlan);

router.post(
  "/",
  auth,
  admin,
  createPlan
);

router.put(
  "/:id",
  auth,
  admin,
  updatePlan
);

router.delete(
  "/:id",
  auth,
  admin,
  deletePlan
);

module.exports = router;
