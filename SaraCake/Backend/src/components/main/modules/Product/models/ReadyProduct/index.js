const type = require ('sequelize');

const sequelize = require ('../../../../../../../server/database/dbconnection');

// ───────────────────────────────────────────────────────────────── Schema ─────
const ReadyProduct = sequelize.define (
  'ReadyProduct',
  {
    readyproduct_id: {
      type: type.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    product_id: {
      type: type.INTEGER,
      allowNull: false,
      unique: true,
    },
    readyproduct_count: {
      type: type.INTEGER,
      allowNull: false,
    },
  },
  {
    timestamps: true,
    paranoid: true,
    tableName: 'ReadyProducts',
  }
);

module.exports = ReadyProduct;
