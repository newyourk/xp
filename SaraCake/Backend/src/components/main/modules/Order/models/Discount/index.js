const type = require ('sequelize');
const sequelize = require ('../../../../../../../server/database/dbconnection');

module.exports = sequelize.define (
  'Discount',
  {
    discount_id: {
      type: type.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    discount_name: {
      type: type.STRING (1000),
      allowNull: false,
    },
    discount_code: {
      type: type.STRING (1000),
      allowNull: false,
    },
    discount_value: {
      type: type.INTEGER,
      allowNull: false,
    },
    discount_percent: {
      type: type.INTEGER,
      allowNull: false,
    },
    discount_min_purchase: {
      type: type.INTEGER,
      allowNull: false,
    },
    discount_max_value: {
      type: type.INTEGER,
      allowNull: false,
    },
    discount_expiration_date: {
      type: type.DATE (3),
      allowNull: false,
    },
    is_used: {
      type: type.BOOLEAN,
      allowNull: false,
    },
    is_personal: {
      type: type.BOOLEAN,
      allowNull: false,
    },
  },
  {
    timestamps: true,
    paranoid: true,
    tableName: 'discounts',
  }
);
