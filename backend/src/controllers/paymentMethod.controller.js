const PaymentMethod =
require("../models/PaymentMethod");

exports.getMethods =
async (req,res)=>{

  try {

    const methods =
    await PaymentMethod.findAll();

    res.json({
      success:true,
      data:methods
    });

  } catch (error) {

    res.status(500).json({
      success:false,
      message:error.message
    });

  }
};

exports.createMethod =
async (req,res)=>{

  try {

    const method =
    await PaymentMethod.create(
      req.body
    );

    res.status(201).json({
      success:true,
      data:method
    });

  } catch (error) {

    res.status(500).json({
      success:false,
      message:error.message
    });

  }
};
