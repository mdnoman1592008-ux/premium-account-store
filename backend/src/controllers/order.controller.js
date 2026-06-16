const Order =
require("../models/Order");

exports.createOrder =
async (req,res)=>{

  try{

    const order =
    await Order.create({

      userId:
      req.user.id,

      appName:
      req.body.appName,

      planName:
      req.body.planName,

      duration:
      req.body.duration,

      amount:
      req.body.amount,

      status:
      "pending"

    });

    res.status(201).json({
      success:true,
      data:order
    });

  }catch(error){

    res.status(500).json({
      success:false,
      message:error.message
    });

  }
};

exports.myOrders =
async (req,res)=>{

  try{

    const orders =
    await Order.findAll({

      where:{
        userId:
        req.user.id
      },

      order:[
        ["createdAt","DESC"]
      ]

    });

    res.json({
      success:true,
      data:orders
    });

  }catch(error){

    res.status(500).json({
      success:false,
      message:error.message
    });

  }
};
