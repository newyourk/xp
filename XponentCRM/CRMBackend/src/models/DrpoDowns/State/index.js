const type = require ('sequelize');

const sequelize = require ('../../../../server/database/dbconnection');

// ───────────────────────────────────────────────────────────────── Schema ─────
const State = sequelize.define (
  ' State',
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
    color: {
      type: type.STRING (1000),
      allowNull: false,
    },
  },
  {
    timestamps: true,
    paranoid: true,
    tableName: 'states',
  }
);

// ─────────────────────────────────────────────────────────── Export Model ─────
module.exports = State;
