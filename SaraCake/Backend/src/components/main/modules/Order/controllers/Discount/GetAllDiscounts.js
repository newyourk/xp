const models = require ('../../models');

module.exports = () => {
  return models.Discount.findAll ();
};
