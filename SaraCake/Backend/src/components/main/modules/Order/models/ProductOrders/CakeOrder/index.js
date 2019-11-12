const type = require ('sequelize');

const sequelize = require ('../../../../../../../../server/database/dbconnection');

module.exports = sequelize.define (
  'CakeOrder',
  {
    cakeorder_id: {
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
    cake_taste_id: {
      type: type.INTEGER,
      allowNull: false,
    },
    cake_count: {
      type: type.INTEGER,
      allowNull: false,
    },
    cake_floorcount: {
      type: type.INTEGER,
      allowNull: false,
    },
    cake_weight: {
      type: type.INTEGER,
      allowNull: false,
    },
    cake_price: {
      type: type.INTEGER,
      allowNull: false,
    },
  },
  {
    timestamps: true,
    paranoid: true,
    tableName: 'cakeorders',
  }
);
