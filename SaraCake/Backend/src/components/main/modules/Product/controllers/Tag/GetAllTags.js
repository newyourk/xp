const models = require ('../../models');

module.exports = () => {
  return models.Tag.findAll ();
};
