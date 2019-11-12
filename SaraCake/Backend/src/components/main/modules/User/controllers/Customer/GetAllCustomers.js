const models = require ('../../models');

module.exports = () => {
  return models.Customer.findAll ();
};
