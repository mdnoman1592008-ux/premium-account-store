const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/db");

const Payment = sequelize.define(
  "Payment",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },

    userId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },

    orderId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },

    paymentMethod: {
      type: DataTypes.STRING,
      allowNull: false
    },

    senderNumber: {
      type: DataTypes.STRING,
      allowNull: false
    },

    transactionId: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false
    },

    amount: {
      type: DataTypes.FLOAT,
      allowNull: false
    },

    screenshot: {
      type: DataTypes.STRING
    },

    status: {
      type: DataTypes.ENUM(
        "pending",
        "approved",
        "rejected"
      ),
      defaultValue: "pending"
    },

    verifiedBy: {
      type: DataTypes.INTEGER
    },

    verifiedAt: {
      type: DataTypes.DATE
    }
  },
  {
    timestamps: true
  }
);

module.exports = Payment;
