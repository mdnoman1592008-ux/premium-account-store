const Payment =
require("../models/Payment");

exports.validateTransaction =
async (
  transactionId
)=>{

  const exists =
  await Payment.findOne({

    where:{
      transactionId
    }

  });

  return !exists;
};
