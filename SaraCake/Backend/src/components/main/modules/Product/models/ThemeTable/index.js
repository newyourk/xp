const type = require ('sequelize');

const sequelize = require ('../../../../../../../server/database/dbconnection');

// ───────────────────────────────────────────────────────────────── Schema ─────
const ThemeTable = sequelize.define (
  'ThemeTable',
  {
    themetable_id: {
      type: type.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    product_id: {
      type: type.INTEGER,
      allowNull: false,
    },
    accessory_id: {
      type: type.INTEGER,
      allowNull: true,
    },
    themetable_totalprice: {
      type: type.INTEGER,
      allowNull: true,
    },
  },
  {
    timestamps: true,
    paranoid: true,
    tableName: 'themetables',
  }
);

// ─────────────────────────────────────────────────────────── Export Model ─────
module.exports = ThemeTable;
