//
// ─── CONFIG DATABASE NAME ──────────────────────────────────────────────────────────────────────
//
const config = require ('config');
const dbname = config.get ('dbname');

//
// ─── SET DATABASE ──────────────────────────────────────────────────────────────────────
//
const Sequelize = require ('sequelize');

const sequelize = new Sequelize (dbname, 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
  // logging: true,
});

module.exports = sequelize;
