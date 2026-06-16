const User = require("../models/User");
const Order = require("../models/Order");
const Payment = require("../models/Payment");

exports.getDashboard =
async (req,res)=>{

  try {

    const users =
    await User.count();

    const orders =
    await Order.count();

    const payments =
    await Payment.count();

    res.json({
      success:true,
      data:{
        users,
        orders,
        payments
      }
    });

  } catch (error) {

    res.status(500).json({
      success:false,
      message:error.message
    });

  }
};
