const Payment =
require("../models/Payment");

exports.submitPayment =
async (req,res)=>{

  try{

    const exists =
    await Payment.findOne({
      where:{
        transactionId:
        req.body.transactionId
      }
    });

    if(exists){

      return res.status(400).json({
        success:false,
        message:
        "Transaction ID already used"
      });

    }

    const payment =
    await Payment.create({

      ...req.body,

      screenshot:
      req.file?.filename

    });

    res.status(201).json({
      success:true,
      data:payment
    });

  }catch(error){

    res.status(500).json({
      success:false,
      message:error.message
    });

  }
};
