const type = require ('sequelize');

const sequelize = require ('../../../../../../../server/database/dbconnection');

module.exports = sequelize.define (
  'Address',
  {
    address_id: {
      type: type.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    address_address: {
      type: type.STRING (1000),
      allowNull: false,
    },
    address_postcode: {
      type: type.STRING (1000),
      allowNull: true,
      validate: {
        not: ['[a-z]', 'i'],
      },
    },
    customer_id: {
      type: type.INTEGER,
      allowNull: false,
    },
    city_id: {
      type: type.INTEGER,
      allowNull: false,
    },
    province_id: {
      type: type.INTEGER,
      allowNull: false,
    },
    country: {
      type: type.STRING (1000),
      allowNull: true,
      defaultValue: 'ایران',
    },
  },
  {
    timestamps: true,
    tableName: 'addresses',
  }
);
