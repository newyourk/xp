const type = require ('sequelize');

const sequelize = require ('../../../server/database/dbconnection');

// ───────────────────────────────────────────────────────────────── Schema ─────
const Brand = sequelize.define (
  'Brand',
  {
    brand_id: {
      type: type.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    brand_name: {
      type: type.STRING (1000),
      allowNull: false,
    },
    brand_code: {
      type: type.STRING (1000),
      allowNull: false,
    },
    brand_ceo_fullname: {
      type: type.STRING (1000),
      allowNull: true,
    },
    brand_pipetype: {
      type: type.STRING (1000),
      allowNull: false,
    },
    brand_stagetype: {
      type: type.STRING (1000),
      allowNull: false,
    },
    brand_servicetype: {
      type: type.STRING (1000),
      allowNull: false,
    },
    brand_lastfollowup: {
      type: type.DATE,
      allowNull: false,
    },
    brand_nextfollowup: {
      type: type.DATE,
      allowNull: false,
    },
    brand_successpercent: {
      type: type.STRING (),
      allowNull: false,
    },
    brand_contractamount: {
      type: type.INTEGER,
      allowNull: false,
    },
    brand_state: {
      type: type.STRING,
      allowNull: false,
    },
    brand_phone: {
      type: type.INTEGER,
      allowNull: true,
    },
    brand_address: {
      type: type.STRING (1000),
      allowNull: true,
    },
    brand_instagram: {
      type: type.STRING (1000),
      allowNull: true,
    },
    brand_website: {
      type: type.STRING (1000),
      allowNull: true,
    },
  },
  {
    timestamps: true,
    paranoid: true,
    tableName: 'brands',
  }
);

// ─────────────────────────────────────────────────────────── Export Model ─────
module.exports = Brand;
