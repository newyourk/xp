const type = require ('sequelize');

const sequelize = require ('../../../../../../../server/database/dbconnection');

module.exports = sequelize.define (
  'Customer',
  {
    customer_id: {
      type: type.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    customer_firstname: {
      type: type.STRING (1000),
      allowNull: true,
    },
    customer_lastname: {
      type: type.STRING (1000),
      allowNull: true,
    },
    customer_username: {
      type: type.STRING (1000),
      allowNull: true,
    },
    customer_email: {
      type: type.STRING (1000),
      allowNull: true,
    },
    customer_birthdate: {
      type: type.DATE (3),
      allowNull: true,
    },
    customer_mobile: {
      type: type.INTEGER,
      allowNull: false,
      unique: true,
    },
    customer_credit: {
      type: type.INTEGER,
      allowNull: true,
    },
  },
  {
    timestamps: true,
    tableName: 'customers',
  }
);
