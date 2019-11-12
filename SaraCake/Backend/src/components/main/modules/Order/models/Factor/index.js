const type = require ('sequelize');

const sequelize = require ('../../../../../../../server/database/dbconnection');

module.exports = sequelize.define (
  'Factor',
  {
    factor_id: {
      type: type.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    factor_status: {
      type: type.STRING (1000),
      allowNull: false,
    },
    customer_id: {
      type: type.INTEGER,
      allowNull: false,
      unique: true,
    },
    customer_firstname: {
      type: type.STRING (1000),
      allowNull: false,
    },
    customer_lastname: {
      type: type.STRING (1000),
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
      unique: true,
    },
    items: {
      type: type.STRING (1000),
      allowNull: false,
      unique: true,
    },
    discount_id: {
      type: type.INTEGER,
      allowNull: false,
      unique: true,
    },
    discount_name: {
      type: type.STRING (1000),
      allowNull: false,
    },
    discount_code: {
      type: type.INTEGER,
      allowNull: false,
    },
    total_price: {
      type: type.INTEGER,
      allowNull: false,
    },
    order_delivery_date: {
      type: type.DATE (3),
      allowNull: false,
    },
    factor_expiration_date: {
      type: type.DATE (3),
      allowNull: false,
    },
  },
  {
    timestamps: true,
    paranoid: true,
    tableName: 'factors',
  }
);
