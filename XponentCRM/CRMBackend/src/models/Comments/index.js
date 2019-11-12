const type = require ('sequelize');

const sequelize = require ('../../../server/database/dbconnection');

// ───────────────────────────────────────────────────────────────── Schema ─────
const Comments = sequelize.define (
  'Comments',
  {
    comment_id: {
      type: type.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    comment_content: {
      type: type.STRING (1000),
      allowNull: false,
    },
    user_id: {
      type: type.INTEGER,
      allowNull: false,
    },
    brand_id: {
      type: type.INTEGER,
      allowNull: false,
    },
  },
  {
    timestamps: true,
    paranoid: true,
    tableName: 'comments',
  }
);

// ─────────────────────────────────────────────────────────── Export Model ─────
module.exports = Comments;
