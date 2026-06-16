const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/db");

const App = sequelize.define(
  "App",
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

    slug: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false
    },

    logo: {
      type: DataTypes.STRING
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

module.exports = App;
