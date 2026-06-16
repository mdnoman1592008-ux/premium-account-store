const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/db");

const InventoryAccount = sequelize.define(
  "InventoryAccount",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },

    appName: {
      type: DataTypes.STRING,
      allowNull: false
    },

    planName: {
      type: DataTypes.STRING,
      allowNull: false
    },

    email: {
      type: DataTypes.STRING,
      allowNull: false
    },

    password: {
      type: DataTypes.STRING,
      allowNull: false
    },

    notes: {
      type: DataTypes.TEXT
    },

    status: {
      type: DataTypes.ENUM(
        "available",
        "assigned",
        "delivered"
      ),
      defaultValue: "available"
    }
  },
  {
    timestamps: true
  }
);

module.exports = InventoryAccount;
