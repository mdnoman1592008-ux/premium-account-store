const User = require("../models/User");
const Order = require("../models/Order");
const Payment = require("../models/Payment");

exports.dashboard = async (
  req,
  res
) => {
  try {
    const totalUsers =
      await User.count();

    const totalOrders =
      await Order.count();

    const totalPayments =
      await Payment.count();

    const pendingOrders =
      await Order.count({
        where: {
          status: "pending"
        }
      });

    const approvedOrders =
      await Order.count({
        where: {
          status: "approved"
        }
      });

    res.json({
      success: true,
      data: {
        totalUsers,
        totalOrders,
        totalPayments,
        pendingOrders,
        approvedOrders
      }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};
