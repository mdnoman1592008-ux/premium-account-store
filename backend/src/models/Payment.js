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

    orderId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },

    paymentMethodId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },

    senderNumber: {
      type: DataTypes.STRING,
      allowNull: false
    },

    transactionId: {
      type: DataTypes.STRING,
      allowNull: false
    },

    screenshot: {
      type: DataTypes.STRING
    },

    amount: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false
    },

    status: {
      type: DataTypes.ENUM(
        "pending",
        "approved",
        "rejected"
      ),
      defaultValue: "pending"
    }
  },
  {
    timestamps: true
  }
);

module.exports = Payment;
