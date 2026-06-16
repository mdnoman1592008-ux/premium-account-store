const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/db");

const DeliveredAccount =
sequelize.define(
  "DeliveredAccount",
  {
    id:{
      type:DataTypes.INTEGER,
      autoIncrement:true,
      primaryKey:true
    },

    userId:{
      type:DataTypes.INTEGER,
      allowNull:false
    },

    orderId:{
      type:DataTypes.INTEGER,
      allowNull:false
    },

    appName:{
      type:DataTypes.STRING,
      allowNull:false
    },

    planName:{
      type:DataTypes.STRING,
      allowNull:false
    },

    duration:{
      type:DataTypes.STRING,
      allowNull:false
    },

    email:{
      type:DataTypes.STRING,
      allowNull:false
    },

    password:{
      type:DataTypes.STRING,
      allowNull:false
    },

    notes:{
      type:DataTypes.TEXT
    },

    deliveredAt:{
      type:DataTypes.DATE,
      defaultValue:DataTypes.NOW
    }
  },
  {
    timestamps:true
  }
);

module.exports =
DeliveredAccount;
