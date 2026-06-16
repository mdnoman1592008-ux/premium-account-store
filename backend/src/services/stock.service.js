const Duration =
require("../models/Duration");

exports.reduceStock =
async (durationId)=>{

  const item =
  await Duration.findByPk(
    durationId
  );

  if(!item){
    return false;
  }

  item.stock =
  Math.max(
    0,
    item.stock - 1
  );

  await item.save();

  return true;
};

exports.isOutOfStock =
async (durationId)=>{

  const item =
  await Duration.findByPk(
    durationId
  );

  if(!item){
    return true;
  }

  return item.stock <= 0;
};
