const models = require ('../../models');

module.exports = () => {
  return models.DoubleCake.findAll ();
};
