const User = require("../models/User");

exports.getUsers = async (req, res) => {
  try {

    const users =
    await User.findAll({
      attributes:{
        exclude:["password"]
      }
    });

    res.json({
      success:true,
      data:users
    });

  } catch (error) {

    res.status(500).json({
      success:false,
      message:error.message
    });

  }
};

exports.getUser = async (req, res) => {

  try {

    const user =
    await User.findByPk(
      req.params.id,
      {
        attributes:{
          exclude:["password"]
        }
      }
    );

    if(!user){
      return res.status(404).json({
        success:false,
        message:"User not found"
      });
    }

    res.json({
      success:true,
      data:user
    });

  } catch (error) {

    res.status(500).json({
      success:false,
      message:error.message
    });

  }
};

exports.blockUser = async (req,res)=>{

  try {

    const user =
    await User.findByPk(
      req.params.id
    );

    user.status = "blocked";

    await user.save();

    res.json({
      success:true,
      message:"User blocked"
    });

  } catch (error) {

    res.status(500).json({
      success:false,
      message:error.message
    });

  }
};
