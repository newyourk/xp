const type = require ('sequelize');

const sequelize = require ('../../../server/database/dbconnection');

// ───────────────────────────────────────────────────────────────── Schema ─────
const User = sequelize.define (
  'User',
  {
    user_id: {
      type: type.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    user_fullname: {
      type: type.STRING (1000),
      allowNull: false,
    },
    username: {
      type: type.STRING (1000),
      unique: true,
      allowNull: false,
    },
    password: {
      type: type.STRING (1000),
      allowNull: false,
    },
    user_mobile: {
      type: type.INTEGER,
      unique: true,
      allowNull: true,
    },
    user_email: {
      type: type.STRING (1000),
      unique: true,
      allowNull: true,
    },
    user_img_src: {
      type: type.STRING (1000),
      allowNull: true,
    },
    access_level: {
      type: type.INTEGER,
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
    tableName: 'users',
  }
);

// ─────────────────────────────────────────────────────────── Export Model ─────
module.exports = User;
