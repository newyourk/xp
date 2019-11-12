const type = require ('sequelize');

const sequelize = require ('../../../../../../../server/database/dbconnection');

module.exports = sequelize.define (
  'Employee',
  {
    emp_id: {
      type: type.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    national_id: {
      type: type.STRING (1000),
      allowNull: false,
      unique: true,
    },
    personal_code: {
      type: type.STRING (1000),
      allowNull: true,
    },
    is_active: {
      type: type.BOOLEAN,
      allowNull: true,
      defaultValue: 1,
    },
    emp_img_src: {
      type: type.STRING (1000),
      allowNull: true,
      defaultValue: 'http://elevacapital.pitchme-am.com/assets/admin/missing_user.png',
    },
  },
  {
    timestamps: true,
    tableName: 'employees',
  }
);
