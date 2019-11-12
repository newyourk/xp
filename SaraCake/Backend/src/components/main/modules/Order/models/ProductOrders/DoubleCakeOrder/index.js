const type = require ('sequelize');

const sequelize = require ('../../../../../../../../server/database/dbconnection');

module.exports = sequelize.define (
  'DoubleCakeOrder',
  {
    doublecakeorder_id: {
      type: type.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    order_id: {
      type: type.INTEGER,
      allowNull: false,
      unique: true,
    },
    product_id: {
      type: type.INTEGER,
      allowNull: false,
    },
    product_name: {
      type: type.STRING (1000),
      allowNull: false,
    },
    product_code: {
      type: type.STRING (1000),
      allowNull: false,
    },
    product_description: {
      type: type.STRING (1000),
      allowNull: false,
    },
    product_image_src: {
      type: type.STRING (1000),
      allowNull: false,
    },
    doublecake_taste_id: {
      type: type.INTEGER,
      allowNull: false,
    },
    doublecake_count: {
      type: type.INTEGER,
      allowNull: false,
    },
    doublecake_price: {
      type: type.INTEGER,
      allowNull: false,
    },
  },
  {
    timestamps: true,
    paranoid: true,
    tableName: 'doublecakeorders',
  }
);
