const type = require ('sequelize');

const sequelize = require ('../../../../../../../server/database/dbconnection');

module.exports = sequelize.define (
  'Province',
  {
    province_id: {
      type: type.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    province_name: {
      type: type.STRING (1000),
      allowNull: false,
    },
  },
  {
    timestamps: true,
    tableName: 'provinces',
  }
);
