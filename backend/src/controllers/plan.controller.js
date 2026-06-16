const Plan = require("../models/Plan");
const Duration = require("../models/Duration");

exports.getPlans = async (req, res) => {
  try {
    const plans = await Plan.findAll({
      include: [Duration]
    });

    res.json({
      success: true,
      data: plans
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

exports.getPlan = async (req, res) => {
  try {
    const plan = await Plan.findByPk(
      req.params.id,
      {
        include: [Duration]
      }
    );

    if (!plan) {
      return res.status(404).json({
        success: false,
        message: "Plan not found"
      });
    }

    res.json({
      success: true,
      data: plan
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

exports.createPlan = async (req, res) => {
  try {
    const plan = await Plan.create(
      req.body
    );

    res.status(201).json({
      success: true,
      data: plan
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

exports.updatePlan = async (req, res) => {
  try {
    const plan = await Plan.findByPk(
      req.params.id
    );

    if (!plan) {
      return res.status(404).json({
        success: false,
        message: "Plan not found"
      });
    }

    await plan.update(req.body);

    res.json({
      success: true,
      data: plan
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

exports.deletePlan = async (req, res) => {
  try {
    const plan = await Plan.findByPk(
      req.params.id
    );

    if (!plan) {
      return res.status(404).json({
        success: false,
        message: "Plan not found"
      });
    }

    await plan.destroy();

    res.json({
      success: true,
      message: "Plan deleted"
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};
