const InventoryAccount =
require("../models/InventoryAccount");

exports.stockSummary =
async ()=>{

  const available =
  await InventoryAccount.count({

    where:{
      status:"available"
    }

  });

  const assigned =
  await InventoryAccount.count({

    where:{
      status:"assigned"
    }

  });

  return {

    available,

    assigned,

    total:
    available +
    assigned

  };
};
