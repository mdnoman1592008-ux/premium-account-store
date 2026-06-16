const Order = require("../models/Order");
const generateOrderNumber = require("../utils/generateOrderNumber");

exports.createOrder = async (req, res) => {
  try {
    const {
      appName,
      planName,
      duration,
      amount
    } = req.body;

    const order = await Order.create({
      orderNumber: generateOrderNumber(),
      userId: req.user.id,
      appName,
      planName,
      duration,
      amount
    });

    res.status(201).json({
      success: true,
      data: order
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

exports.getMyOrders = async (req, res) => {
  try {
    const orders = await Order.findAll({
      where: {
        userId: req.user.id
      },
      order: [["createdAt", "DESC"]]
    });

    res.json({
      success: true,
      data: orders
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

exports.getAllOrders = async (req, res) => {
  try {
    const orders = await Order.findAll({
      order: [["createdAt", "DESC"]]
    });

    res.json({
      success: true,
      data: orders
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

exports.approveOrder = async (req, res) => {
  try {
    const order = await Order.findByPk(
      req.params.id
    );

    if (!order) {
      return res.status(404).json({
        success: false,
        message: "Order not found"
      });
    }

    order.status = "approved";

    await order.save();

    res.json({
      success: true,
      message: "Order approved"
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

exports.rejectOrder = async (req, res) => {
  try {
    const order = await Order.findByPk(
      req.params.id
    );

    if (!order) {
      return res.status(404).json({
        success: false,
        message: "Order not found"
      });
    }

    order.status = "rejected";
    order.adminNote =
      req.body.reason || "Rejected";

    await order.save();

    res.json({
      success: true,
      message: "Order rejected"
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};
