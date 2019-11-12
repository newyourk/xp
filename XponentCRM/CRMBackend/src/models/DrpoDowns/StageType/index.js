const type = require ('sequelize');

const sequelize = require ('../../../../server/database/dbconnection');

// ───────────────────────────────────────────────────────────────── Schema ─────
const StageType = sequelize.define (
  'StageType',
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
    tableName: 'stagetypes',
  }
);

// ─────────────────────────────────────────────────────────── Export Model ─────
module.exports = StageType;
