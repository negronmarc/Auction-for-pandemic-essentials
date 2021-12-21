const { Sequelize, Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Product extends Model {}

Product.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    starting_price: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    current_bid: {
      type: DataTypes.INTEGER,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    bid_count: {
      type: DataTypes.INTEGER,
    },
    // TODO: allow sequelize to generate foreign keys automatically
    // category_id: {
    //   type: DataTypes.INTEGER,
    //  allowNull: false,
    // },
    // current_bidder_id: {
    //   type: DataTypes.INTEGER,
    // },
  },
  {
    sequelize,
    timestamps: false,
    underscored: true,
    modelName: "product",
  }
);

module.exports = Product;