const type = require ('sequelize');

const sequelize = require ('../../../../server/database/dbconnection');

// ───────────────────────────────────────────────────────────────── Schema ─────
const SuccessPercent = sequelize.define (
  'SuccessPercent',
  {
    id: {
      type: type.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    value: {
      type: type.STRING (1000),
      allowNull: false,
    },
  },
  {
    timestamps: true,
    paranoid: true,
    tableName: 'successpercents',
  }
);

// ─────────────────────────────────────────────────────────── Export Model ─────
module.exports = SuccessPercent;
