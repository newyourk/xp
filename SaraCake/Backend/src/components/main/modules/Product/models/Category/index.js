const type = require ('sequelize');

const sequelize = require ('../../../../../../../server/database/dbconnection');

// ───────────────────────────────────────────────────────────────── Schema ─────
const Category = sequelize.define (
  'Category',
  {
    category_id: {
      type: type.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    category_name: {
      type: type.STRING (1000),
      allowNull: false,
    },
    category_code: {
      type: type.STRING (200),
      allowNull: false,
    },
    category_description: {
      type: type.STRING (1000),
      allowNull: true,
    },
    category_image_src1: {
      type: type.STRING (1000),
      allowNull: true,
    },
    category_image_src2: {
      type: type.STRING (1000),
      allowNull: true,
    },
    category_image_src3: {
      type: type.STRING (1000),
      allowNull: true,
    },
  },
  {
    timestamps: true,
    paranoid: true,
    tableName: 'categories',
  }
);

// ─────────────────────────────────────────────────────────── Export Model ─────
module.exports = Category;
