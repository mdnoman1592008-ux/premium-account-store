const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/db");
const App = require("./App");

const Plan = sequelize.define(
  "Plan",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },

    appId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: App,
        key: "id"
      }
    },

    name: {
      type: DataTypes.STRING,
      allowNull: false
    },

    description: {
      type: DataTypes.TEXT
    },

    status: {
      type: DataTypes.ENUM("active", "inactive"),
      defaultValue: "active"
    }
  },
  {
    timestamps: true
  }
);

App.hasMany(Plan, {
  foreignKey: "appId"
});

Plan.belongsTo(App, {
  foreignKey: "appId"
});

module.exports = Plan;
