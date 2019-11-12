const type = require ('sequelize');

const sequelize = require ('../../../../../../../server/database/dbconnection');

// ───────────────────────────────────────────────────────────────── Schema ─────
const DoubleCake = sequelize.define (
  'DoubleCake',
  {
    doublecake_id: {
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
    taste_id: {
      type: type.INTEGER,
      allowNull: true,
      unique: true,
    },
    doublecake_count: {
      type: type.INTEGER,
      allowNull: true,
    },
  },
  {
    timestamps: true,
    paranoid: true,
    tableName: 'doublecakes',
  }
);

// ─────────────────────────────────────────────────────────── Export Model ─────
module.exports = DoubleCake;
