const Order =
require("../models/Order");

exports.getDashboardStats =
async ()=>{

  const orders =
  await Order.count();

  const completed =
  await Order.count({

    where:{
      status:"completed"
    }

  });

  return {

    orders,
    completed

  };
};
