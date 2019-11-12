const type = require ('sequelize');

const sequelize = require ('../../../../../../../server/database/dbconnection');

// ───────────────────────────────────────────────────────────────── Schema ─────
const Taste = sequelize.define (
  'Taste',
  {
    taste_id: {
      type: type.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    taste_name: {
      type: type.STRING (1000),
      allowNull: false,
    },
    taste_price: {
      type: type.INTEGER,
      allowNull: false,
    },
    is_doublecake: {
      type: type.BOOLEAN,
      defaultValue: 0,
      allowNull: false,
    },
    is_active: {
      type: type.BOOLEAN,
      defaultValue: 1,
      allowNull: false,
    },
  },
  {
    timestamps: true,
    paranoid: true,
    tableName: 'tastes',
  }
);

// ───────────────────────────────────────────────────────────── Relations ─────

// ─────────────────────────────────────────────────────────── Export Model ─────
module.exports = Taste;
