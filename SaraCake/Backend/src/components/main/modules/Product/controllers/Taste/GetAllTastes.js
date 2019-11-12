const models = require ('../../models');

module.exports = () => {
  return models.Taste.findAll ();
};
