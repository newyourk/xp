const type = require ('sequelize');

const sequelize = require ('../../../../../../../server/database/dbconnection');

// ───────────────────────────────────────────────────────────────── Schema ─────
const Accessory = sequelize.define (
  'Accessory',
  {
    accessory_id: {
      type: type.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    accessory_name: {
      type: type.STRING (1000),
      allowNull: false,
    },
    accessory_count: {
      type: type.INTEGER,
      allowNull: false,
    },
    accessory_mincount: {
      type: type.INTEGER,
      allowNull: false,
    },
    accessory_minprice: {
      type: type.INTEGER,
      allowNull: false,
    },
    is_exist: {
      type: type.BOOLEAN,
      defaultValue: 1,
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
    tableName: 'accessories',
  }
);

// ─────────────────────────────────────────────────────────── Export Model ─────
module.exports = Accessory;
