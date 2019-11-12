const type = require ('sequelize');

const sequelize = require ('../../../../../../../server/database/dbconnection');

// ───────────────────────────────────────────────────────────────── Schema ─────
const Tag = sequelize.define (
  'Tag',
  {
    tag_id: {
      type: type.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    tag_name: {
      type: type.STRING (1000),
      allowNull: false,
    },
  },
  {
    timestamps: true,
    paranoid: true,
    tableName: 'tags',
  }
);

// ───────────────────────────────────────────────────────────── Relations ─────

// ─────────────────────────────────────────────────────────── Export Model ─────
module.exports = Tag;
