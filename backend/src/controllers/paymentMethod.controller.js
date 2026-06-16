const PaymentMethod =
require("../models/PaymentMethod");

exports.getMethods =
async (req,res)=>{

  const methods =
  await PaymentMethod.findAll();

  res.json(methods);
};

exports.updateMethod =
async (req,res)=>{

  const method =
  await PaymentMethod.findByPk(
    req.params.id
  );

  await method.update(
    req.body
  );

  res.json(method);
};
