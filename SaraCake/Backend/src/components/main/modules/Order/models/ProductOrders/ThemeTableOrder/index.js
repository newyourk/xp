const type = require ('sequelize');

const sequelize = require ('../../../../../../../../server/database/dbconnection');

module.exports = sequelize.define (
  'ThemeTableOrder',
  {
    ttorder_id: {
      type: type.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    order_id: {
      type: type.INTEGER,
      allowNull: false,
      unique: true,
    },
    product_id: {
      type: type.INTEGER,
      allowNull: false,
    },
    product_name: {
      type: type.STRING (1000),
      allowNull: false,
    },
    product_code: {
      type: type.STRING (1000),
      allowNull: false,
    },
    product_description: {
      type: type.STRING (1000),
      allowNull: false,
    },
    product_image_src: {
      type: type.STRING (1000),
      allowNull: false,
    },
    ttcake_taste_id: {
      type: type.INTEGER,
      allowNull: false,
    },
    ttcake_count: {
      type: type.INTEGER,
      allowNull: false,
    },
    ttcake_floorcount: {
      type: type.INTEGER,
      allowNull: false,
    },
    ttcake_weight: {
      type: type.INTEGER,
      allowNull: false,
    },
    ttcake_price: {
      type: type.INTEGER,
      allowNull: false,
    },
    accessory_id: {
      type: type.INTEGER,
      allowNull: false,
      unique: true,
    },
    accessory_name: {
      type: type.STRING (1000),
      allowNull: false,
    },
    accessory_count: {
      type: type.INTEGER,
      allowNull: false,
    },
  },
  {
    timestamps: true,
    paranoid: true,
    tableName: 'themetableorders',
  }
);
