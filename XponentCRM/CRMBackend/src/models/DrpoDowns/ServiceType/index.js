const type = require ('sequelize');

const sequelize = require ('../../../../server/database/dbconnection');

// ───────────────────────────────────────────────────────────────── Schema ─────
const ServiceType = sequelize.define (
  'ServiceType',
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
    tableName: 'servicetypes',
  }
);

// ─────────────────────────────────────────────────────────── Export Model ─────
module.exports = ServiceType;
