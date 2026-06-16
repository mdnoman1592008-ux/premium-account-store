const { DataTypes } =
require("sequelize");

const {
  sequelize
} = require("../config/db");

const StockLog =
sequelize.define(
  "StockLog",
  {

    id:{
      type:DataTypes.INTEGER,
      autoIncrement:true,
      primaryKey:true
    },

    appName:
    DataTypes.STRING,

    planName:
    DataTypes.STRING,

    duration:
    DataTypes.STRING,

    action:
    DataTypes.STRING

  },
  {
    timestamps:true
  }
);

module.exports =
StockLog;
