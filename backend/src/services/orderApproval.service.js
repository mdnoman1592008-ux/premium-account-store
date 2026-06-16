const Payment =
require("../models/Payment");

const Order =
require("../models/Order");

const {
  assignAccount
} = require(
  "./accountDelivery.service"
);

exports.approveOrder =
async (
  orderId
)=>{

  const order =
  await Order.findByPk(
    orderId
  );

  if(!order){
    throw new Error(
      "Order not found"
    );
  }

  order.status =
  "approved";

  await order.save();

  await assignAccount(
    order.appName,
    order.planName,
    order.id
  );

  return order;
};
