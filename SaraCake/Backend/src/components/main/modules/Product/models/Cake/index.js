const type = require ('sequelize');

const sequelize = require ('../../../../../../../server/database/dbconnection');

const Cake = sequelize.define (
  'Cake',
  {
    cake_id: {
      type: type.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    product_id: {
      type: type.INTEGER,
      allowNull: false,
      unique: true,
    },
    taste_id: {
      type: type.INTEGER,
      allowNull: false,
      unique: false,
    },
    cake_floorcount: {
      type: type.INTEGER,
      allowNull: false,
    },
    cake_weight: {
      type: type.INTEGER,
      allowNull: false,
    },
    is_ttcake: {
      type: type.BOOLEAN,
      defaultValue: 0,
      allowNull: false,
    },
    themetable_id: {
      type: type.INTEGER,
      allowNull: true,
    },
  },
  {
    timestamps: true,
    paranoid: true,
    tableName: 'cakes',
  }
);

module.exports = Cake;
