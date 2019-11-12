const type = require ('sequelize');

const sequelize = require ('../../../../../../../server/database/dbconnection');

module.exports = sequelize.define (
  'SignupCode',
  {
    code_id: {
      type: type.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    customer_mobile: {
      type: type.STRING (1000),
      allowNull: false,
      validate: {
        // len: [11, 14],
        not: ['[a-z]', 'i'],
      },
      unique: true,
    },
    code: {
      type: type.STRING (1000),
      allowNull: false,
    },
    expiration_date: {
      type: type.DATE,
      allowNull: false,
    },
  },
  {
    timestamps: true,
    tableName: 'signupcodes',
  }
);
