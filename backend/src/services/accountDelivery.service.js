const InventoryAccount =
require("../models/InventoryAccount");

const DeliveredAccount =
require("../models/DeliveredAccount");

const Order =
require("../models/Order");

exports.assignAccount =
async (
  appName,
  planName,
  orderId,
  userId
)=>{

  const account =
  await InventoryAccount.findOne({
    where:{
      appName,
      planName,
      status:"available"
    }
  });

  if(!account){
    throw new Error(
      "Out Of Stock"
    );
  }

  account.status =
  "assigned";

  await account.save();

  await DeliveredAccount.create({

    userId,
    orderId,

    appName,
    planName,

    email:
    account.email,

    password:
    account.password,

    notes:
    account.notes

  });

  return account;
};
