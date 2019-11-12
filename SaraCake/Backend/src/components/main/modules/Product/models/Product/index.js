const type = require ('sequelize');

const sequelize = require ('../../../../../../../server/database/dbconnection');

// ───────────────────────────────────────────────────────────────── Schema ─────
var Product = sequelize.define (
  'Product',
  {
    product_id: {
      type: type.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    category_id: {
      type: type.INTEGER,
      allowNull: false,
    },
    product_name: {
      type: type.STRING (1000),
      allowNull: false,
    },
    product_code: {
      type: type.STRING (10),
      allowNull: false,
    },
    product_description: {
      type: type.STRING (1000),
      allowNull: true,
    },
    product_image_src1: {
      type: type.STRING (1000),
      allowNull: true,
    },
    product_image_src2: {
      type: type.STRING (1000),
      allowNull: true,
    },
    product_image_src3: {
      type: type.STRING (1000),
      allowNull: true,
    },
    product_image_src4: {
      type: type.STRING (1000),
      allowNull: true,
    },
    product_image_src5: {
      type: type.STRING (1000),
      allowNull: true,
    },
    product_off_percent: {
      type: type.INTEGER,
      allowNull: true,
    },
    product_off_toman: {
      type: type.INTEGER,
      allowNull: true,
    },
    product_price_current: {
      type: type.INTEGER,
      allowNull: false,
    },
    product_price_former: {
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
    tableName: 'products',
  }
);

// ─────────────────────────────────────────────────────────── Export Model ─────
module.exports = Product;
