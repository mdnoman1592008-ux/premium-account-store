const InventoryAccount =
require("../models/InventoryAccount");

const DeliveredAccount =
require("../models/DeliveredAccount");

exports.assignAccount =
async ({
  userId,
  orderId,
  appName,
  planName,
  duration
}) => {

  const account =
  await InventoryAccount.findOne({
    where:{
      appName,
      planName,
      duration,
      status:"available"
    }
  });

  if(!account){
    throw new Error(
      "No inventory account available"
    );
  }

  account.status =
  "assigned";

  await account.save();

  const delivered =
  await DeliveredAccount.create({

    userId,
    orderId,

    appName,
    planName,
    duration,

    email:
    account.email,

    password:
    account.password,

    notes:
    account.notes

  });

  return delivered;
};
