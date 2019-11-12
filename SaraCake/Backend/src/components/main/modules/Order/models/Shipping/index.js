const type = require ('sequelize');

const sequelize = require ('../../../../../../../server/database/dbconnection');

module.exports = sequelize.define (
  'Shipping',
  {
    shipping_id: {
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
    address_address: {
      type: type.STRING (1000),
      allowNull: false,
    },
    address_postcode: {
      type: type.STRING (1000),
      allowNull: false,
      validate: {
        not: ['[a-z]', 'i'],
      },
    },
    city: {
      type: type.STRING (1000),
      allowNull: false,
    },
    province: {
      type: type.STRING (1000),
      allowNull: false,
    },
    country: {
      type: type.STRING (1000),
      allowNull: true,
      defaultValue: 'ایران',
    },
    discount_code: {
      type: type.STRING (1000),
      allowNull: true,
    },
    discount_name: {
      type: type.STRING (1000),
      allowNull: true,
    },
    discount_value: {
      type: type.INTEGER,
      allowNull: true,
    },
  },
  {
    timestamps: true,
    paranoid: true,
    tableName: 'shippings',
  }
);
