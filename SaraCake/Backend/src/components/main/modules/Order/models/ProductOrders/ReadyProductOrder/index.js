const type = require ('sequelize');

const sequelize = require ('../../../../../../../../server/database/dbconnection');

module.exports = sequelize.define (
  'ReadyProductOrder',
  {
    readyproductorder_id: {
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
    readyproduct_count: {
      type: type.INTEGER,
      allowNull: false,
    },
    readyproduct_price: {
      type: type.INTEGER,
      allowNull: false,
    },
  },
  {
    timestamps: true,
    paranoid: true,
    tableName: 'readyproductorders',
  }
);
