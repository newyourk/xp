const type = require ('sequelize');

const sequelize = require ('../../../server/database/dbconnection');

// ───────────────────────────────────────────────────────────────── Schema ─────
const People = sequelize.define (
  'People',
  {
    pp_id: {
      type: type.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    pp_fullname: {
      type: type.STRING (1000),
      allowNull: false,
    },
    pp_role: {
      type: type.STRING (1000),
      allowNull: true,
    },
    pp_mobile: {
      type: type.INTEGER,
      allowNull: true,
    },
    brand_id: {
      type: type.INTEGER,
      allowNull: false,
    },
  },
  {
    timestamps: true,
    paranoid: true,
    tableName: 'peoples',
  }
);

// ─────────────────────────────────────────────────────────── Export Model ─────
module.exports = People;
