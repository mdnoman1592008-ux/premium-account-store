const DeliveredAccount =
require("../models/DeliveredAccount");

exports.deliveryHistory =
async (req,res)=>{

  try{

    const history =
    await DeliveredAccount.findAll({

      order:[
        ["createdAt","DESC"]
      ]

    });

    res.json({
      success:true,
      data:history
    });

  }catch(error){

    res.status(500).json({
      success:false,
      message:error.message
    });

  }
};
