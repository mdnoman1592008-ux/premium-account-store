const Payment =
require("../models/Payment");

exports.submitPayment =
async (req,res)=>{

  try{

    const duplicate =
    await Payment.findOne({
      where:{
        transactionId:
        req.body.transactionId
      }
    });

    if(duplicate){

      return res.status(400).json({
        success:false,
        message:
        "Transaction ID already exists"
      });

    }

    const payment =
    await Payment.create({

      userId:
      req.user.id,

      orderId:
      req.body.orderId,

      paymentMethod:
      req.body.paymentMethod,

      senderNumber:
      req.body.senderNumber,

      transactionId:
      req.body.transactionId,

      amount:
      req.body.amount,

      screenshot:
      req.file
      ? req.file.filename
      : null

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
