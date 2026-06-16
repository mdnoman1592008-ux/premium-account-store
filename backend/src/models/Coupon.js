const { DataTypes } =
require("sequelize");

const {
  sequelize
} = require("../config/db");

const Coupon =
sequelize.define(
  "Coupon",
  {
    id:{
      type:DataTypes.INTEGER,
      autoIncrement:true,
      primaryKey:true
    },

    code:{
      type:DataTypes.STRING,
      unique:true
    },

    discountType:{
      type:DataTypes.ENUM(
        "percentage",
        "fixed"
      )
    },

    discountValue:{
      type:DataTypes.FLOAT
    },

    maxUses:{
      type:DataTypes.INTEGER,
      defaultValue:100
    },

    usedCount:{
      type:DataTypes.INTEGER,
      defaultValue:0
    },

    active:{
      type:DataTypes.BOOLEAN,
      defaultValue:true
    }
  },
  {
    timestamps:true
  }
);

module.exports = Coupon;
