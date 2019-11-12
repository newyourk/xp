const type = require ('sequelize');

const sequelize = require ('../../../../../../../server/database/dbconnection');

module.exports = sequelize.define (
  'Order',
  {
    order_id: {
      type: type.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    category_id: {
      type: type.INTEGER,
      allowNull: false,
      unique: true,
    },
    customer_id: {
      type: type.INTEGER,
      allowNull: false,
      unique: true,
    },
    order_status: {
      type: type.STRING (1000),
      allowNull: false,
    },
    order_delivery_date: {
      type: type.DATE (3),
      allowNull: false,
    },
    order_total_price: {
      type: type.INTEGER,
      allowNull: false,
    },
  },
  {
    timestamps: true,
    paranoid: true,
    tableName: 'orders',
  }
);
