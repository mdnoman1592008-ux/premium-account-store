const {
  getStock
} = require(
  "../services/stockCounter.service"
);

exports.stockInfo =
async (req,res)=>{

  const stock =
  await getStock(

    req.query.app,

    req.query.plan,

    req.query.duration

  );

  res.json({
    success:true,
    stock
  });
};
