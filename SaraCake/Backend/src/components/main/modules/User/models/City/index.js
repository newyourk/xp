const type = require ('sequelize');

const sequelize = require ('../../../../../../../server/database/dbconnection');

module.exports = sequelize.define (
  'City',
  {
    city_id: {
      type: type.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    province_id: {
      type: type.INTEGER,
      allowNull: false,
    },
    city_name: {
      type: type.STRING (1000),
      allowNull: false,
    },
  },
  {
    timestamps: true,
    tableName: 'cities',
  }
);
