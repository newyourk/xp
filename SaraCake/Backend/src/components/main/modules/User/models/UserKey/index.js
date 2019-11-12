const type = require ('sequelize');

const sequelize = require ('../../../../../../../server/database/dbconnection');

module.exports = sequelize.define (
  'UserKey',
  {
    key_id: {
      type: type.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    customer_id: {
      type: type.INTEGER,
      allowNull: false,
    },
    keysecret: {
      type: type.STRING (2000),
      allowNull: false,
    },
    access_level: {
      type: type.INTEGER,
      allowNull: false,
    },
    expiration_date: {
      type: type.DATE,
      allowNull: false,
    },
  },
  {
    timestamps: true,
    tableName: 'userkeys',
  }
);
