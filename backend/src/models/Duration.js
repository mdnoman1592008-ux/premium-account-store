const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/db");
const Plan = require("./Plan");

const Duration = sequelize.define(
  "Duration",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },

    planId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },

    duration: {
      type: DataTypes.ENUM(
        "3_months",
        "6_months",
        "12_months"
      ),
      allowNull: false
    },

    regularPrice: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false
    },

    discountPercent: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    },

    finalPrice: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false
    },

    stock: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    },

    badge: {
      type: DataTypes.STRING,
      defaultValue: ""
    }
  },
  {
    timestamps: true
  }
);

Plan.hasMany(Duration, {
  foreignKey: "planId"
});

Duration.belongsTo(Plan, {
  foreignKey: "planId"
});

module.exports = Duration;
