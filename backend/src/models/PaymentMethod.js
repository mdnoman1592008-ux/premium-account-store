const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/db");

const PaymentMethod = sequelize.define(
  "PaymentMethod",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },

    name: {
      type: DataTypes.STRING,
      allowNull: false
    },

    logo: {
      type: DataTypes.STRING
    },

    accountNumber: {
      type: DataTypes.STRING,
      allowNull: false
    },

    accountType: {
      type: DataTypes.STRING,
      defaultValue: "Personal"
    },

    status: {
      type: DataTypes.ENUM(
        "active",
        "inactive"
      ),
      defaultValue: "active"
    }
  },
  {
    timestamps: true
  }
);

module.exports = PaymentMethod;
