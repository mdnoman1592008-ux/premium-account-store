const Notification =
require("../models/Notification");

exports.getNotifications =
async (req,res)=>{

  try{

    const notifications =
    await Notification.findAll({
      where:{
        userId:req.user.id
      },
      order:[
        ["createdAt","DESC"]
      ]
    });

    res.json({
      success:true,
      data:notifications
    });

  }catch(error){

    res.status(500).json({
      success:false,
      message:error.message
    });

  }
};

exports.markAsRead =
async (req,res)=>{

  try{

    const notification =
    await Notification.findByPk(
      req.params.id
    );

    notification.isRead =
    true;

    await notification.save();

    res.json({
      success:true
    });

  }catch(error){

    res.status(500).json({
      success:false,
      message:error.message
    });

  }
};
