const InventoryAccount =
require("../models/InventoryAccount");

exports.getStock =
async (
  appName,
  planName,
  duration
)=>{

  const count =
  await InventoryAccount.count({

    where:{

      appName,

      planName,

      duration,

      status:
      "available"

    }

  });

  return count;
};
