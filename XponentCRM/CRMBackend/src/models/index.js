const sequelize = require ('../../server/database/dbconnection');

const Brand = require ('./Brand');
const Comments = require ('./Comments');
const People = require ('./People');
const User = require ('./User');

const PipeType = require ('./DrpoDowns/PipeType');
const ServiceType = require ('./DrpoDowns/ServiceType');
const StageType = require ('./DrpoDowns/StageType');
const State = require ('./DrpoDowns/State');
const SuccessPercent = require ('./DrpoDowns/SuccessPercent');

//
// ─── RELATIONS ───────────────────────────────────────────────────────────────
//

People.belongsTo (Brand, {
  foreignKey: {
    name: 'brand_id',
    allowNull: false,
  },
  onUpdate: 'CASCADE',
  onDelete: 'CASCADE',
});

Brand.hasMany (People, {
  foreignKey: {
    name: 'brand_id',
    allowNull: false,
  },
  onUpdate: 'CASCADE',
  onDelete: 'CASCADE',
});

User.hasMany (Brand, {
  foreignKey: {
    name: 'user_id',
    allowNull: false,
  },
  onUpdate: 'CASCADE',
  onDelete: 'CASCADE',
});

User.hasMany (Comments, {
  foreignKey: {
    name: 'user_id',
    allowNull: false,
  },
  onUpdate: 'CASCADE',
  onDelete: 'CASCADE',
});

Brand.hasMany (Comments, {
  foreignKey: {
    name: 'brand_id',
    allowNull: false,
  },
  onUpdate: 'CASCADE',
  onDelete: 'CASCADE',
});

// ─── EXECUTION THE RELATIONS ───────────────────────────────────────────────────────────────────────────────
sequelize
  .sync ({force: false})
  .then (err => {
    console.log ('Connection has been established successfully.');
  })
  .catch (err => {
    console.error ('Unable to connect to the database:', err);
  });

module.exports = {
  Brand,
  Comments,
  People,
  User,
  PipeType,
  ServiceType,
  StageType,
  State,
  SuccessPercent,
};
