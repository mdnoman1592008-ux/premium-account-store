const Payment =
require("../models/Payment");

const Order =
require("../models/Order");

const {
  assignAccount
} = require(
  "../services/accountDelivery.service"
);

exports.approvePayment =
async (req,res)=>{

  try{

    const payment =
    await Payment.findByPk(
      req.params.id
    );

    if(!payment){

      return res.status(404).json({
        success:false,
        message:"Payment not found"
      });

    }

    payment.status =
    "approved";

    payment.verifiedBy =
    req.user.id;

    payment.verifiedAt =
    new Date();

    await payment.save();

    const order =
    await Order.findByPk(
      payment.orderId
    );

    if(!order){

      return res.status(404).json({
        success:false,
        message:"Order not found"
      });

    }

    order.status =
    "completed";

    await order.save();

    await assignAccount({

      userId:
      order.userId,

      orderId:
      order.id,

      appName:
      order.appName,

      planName:
      order.planName,

      duration:
      order.duration

    });

    res.json({
      success:true,
      message:
      "Payment approved and account delivered"
    });

  }catch(error){

    res.status(500).json({
      success:false,
      message:error.message
    });

  }
};

exports.rejectPayment =
async (req,res)=>{

  try{

    const payment =
    await Payment.findByPk(
      req.params.id
    );

    if(!payment){

      return res.status(404).json({
        success:false
      });

    }

    payment.status =
    "rejected";

    await payment.save();

    res.json({
      success:true
    });

  }catch(error){

    res.status(500).json({
      success:false,
      message:error.message
    });

  }
};
