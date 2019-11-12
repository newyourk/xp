const models = require ('../../models');

module.exports = () => {
  return models.ReadyProduct.findAll ();
};
