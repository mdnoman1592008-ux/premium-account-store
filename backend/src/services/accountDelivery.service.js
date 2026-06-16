const InventoryAccount =
require("../models/InventoryAccount");

const Order =
require("../models/Order");

exports.assignAccount =
async (
  appName,
  planName,
  orderId
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
    return null;
  }

  account.status =
  "assigned";

  await account.save();

  const order =
  await Order.findByPk(orderId);

  order.accountEmail =
  account.email;

  order.accountPassword =
  account.password;

  await order.save();

  return account;
};
