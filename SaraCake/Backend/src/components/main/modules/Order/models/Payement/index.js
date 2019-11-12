const type = require ('sequelize');

const sequelize = require ('../../../../../../../server/database/dbconnection');

module.exports = sequelize.define (
  'Payement',
  {
    payement_id: {
      type: type.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    payement_amount: {
      type: type.INTEGER,
      allowNull: false,
    },
    payement_bank_name: {
      type: type.STRING (50),
      allowNull: false,
    },
    //bestankar
    creditor_name: {
      type: type.STRING (50),
      allowNull: false,
    },
    payement_status: {
      type: type.STRING (25),
      allowNull: false,
    },
  },
  {
    timestamps: true,
    paranoid: true,
    tableName: 'payements',
  }
);
