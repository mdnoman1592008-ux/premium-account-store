const Payment =
require("../models/Payment");

exports.getPendingPayments =
async (req,res)=>{

  const payments =
  await Payment.findAll({

    where:{
      status:"pending"
    }

  });

  res.json(payments);
};
