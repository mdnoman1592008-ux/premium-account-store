const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/db");

const Order = sequelize.define(
  "Order",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },

    orderNumber: {
      type: DataTypes.STRING,
      unique: true
    },

    userId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },

    appName: {
      type: DataTypes.STRING,
      allowNull: false
    },

    planName: {
      type: DataTypes.STRING,
      allowNull: false
    },

    duration: {
      type: DataTypes.STRING,
      allowNull: false
    },

    amount: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false
    },

    status: {
      type: DataTypes.ENUM(
        "pending",
        "approved",
        "rejected",
        "delivered"
      ),
      defaultValue: "pending"
    },

    adminNote: {
      type: DataTypes.TEXT
    }
  },
  {
    timestamps: true
  }
);

module.exports = Order;
