const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/db");

const Settings = sequelize.define(
  "Settings",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },

    siteName: {
      type: DataTypes.STRING,
      defaultValue: "Premium Account Store"
    },

    supportEmail: {
      type: DataTypes.STRING
    },

    supportWhatsapp: {
      type: DataTypes.STRING
    },

    facebookLink: {
      type: DataTypes.STRING
    },

    telegramLink: {
      type: DataTypes.STRING
    },

    logo: {
      type: DataTypes.STRING
    },

    maintenanceMode: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  },
  {
    timestamps: true
  }
);

module.exports = Settings;
