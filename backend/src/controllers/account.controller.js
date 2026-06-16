const DeliveredAccount =
require("../models/DeliveredAccount");

exports.myAccounts =
async (req,res)=>{

  try{

    const accounts =
    await DeliveredAccount.findAll({
      where:{
        userId:req.user.id
      },
      order:[
        ["createdAt","DESC"]
      ]
    });

    res.json({
      success:true,
      data:accounts
    });

  }catch(error){

    res.status(500).json({
      success:false,
      message:error.message
    });

  }
};

exports.accountDetails =
async (req,res)=>{

  try{

    const account =
    await DeliveredAccount.findByPk(
      req.params.id
    );

    if(!account){
      return res.status(404).json({
        success:false
      });
    }

    res.json({
      success:true,
      data:account
    });

  }catch(error){

    res.status(500).json({
      success:false,
      message:error.message
    });

  }
};
