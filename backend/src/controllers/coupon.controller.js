const Coupon =
require("../models/Coupon");

exports.validateCoupon =
async (req,res)=>{

  try{

    const { code } =
    req.body;

    const coupon =
    await Coupon.findOne({
      where:{
        code,
        active:true
      }
    });

    if(!coupon){
      return res.status(404).json({
        success:false,
        message:"Invalid coupon"
      });
    }

    res.json({
      success:true,
      data:coupon
    });

  }catch(error){

    res.status(500).json({
      success:false,
      message:error.message
    });

  }
};

exports.createCoupon =
async (req,res)=>{

  try{

    const coupon =
    await Coupon.create(
      req.body
    );

    res.status(201).json({
      success:true,
      data:coupon
    });

  }catch(error){

    res.status(500).json({
      success:false,
      message:error.message
    });

  }
};
