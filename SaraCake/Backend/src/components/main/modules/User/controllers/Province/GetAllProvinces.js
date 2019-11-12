const models = require ('../../models');

module.exports = () => {
  return models.Province.findAll ();
};
