const InventoryAccount =
require("../models/InventoryAccount");

exports.getInventory =
async (req, res) => {
  try {

    const inventory =
    await InventoryAccount.findAll({
      order:[
        ["createdAt","DESC"]
      ]
    });

    res.json({
      success:true,
      data:inventory
    });

  } catch (error) {

    res.status(500).json({
      success:false,
      message:error.message
    });

  }
};

exports.createInventory =
async (req, res) => {
  try {

    const item =
    await InventoryAccount.create(
      req.body
    );

    res.status(201).json({
      success:true,
      data:item
    });

  } catch (error) {

    res.status(500).json({
      success:false,
      message:error.message
    });

  }
};

exports.deleteInventory =
async (req, res) => {
  try {

    const item =
    await InventoryAccount.findByPk(
      req.params.id
    );

    if(!item){
      return res.status(404).json({
        success:false,
        message:"Inventory not found"
      });
    }

    await item.destroy();

    res.json({
      success:true,
      message:"Inventory deleted"
    });

  } catch (error) {

    res.status(500).json({
      success:false,
      message:error.message
    });

  }
};
