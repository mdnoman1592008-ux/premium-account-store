const { DataTypes } =
require("sequelize");

const { sequelize } =
require("../config/db");

const PaymentMethod =
sequelize.define(
  "PaymentMethod",
  {

    id:{
      type:DataTypes.INTEGER,
      autoIncrement:true,
      primaryKey:true
    },

    name:{
      type:DataTypes.STRING
    },

    accountNumber:{
      type:DataTypes.STRING
    },

    accountType:{
      type:DataTypes.STRING
    },

    active:{
      type:DataTypes.BOOLEAN,
      defaultValue:true
    }

  }
);

module.exports =
PaymentMethod;
