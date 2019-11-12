const models = require ('../../models');

module.exports = () => {
  return models.Accessory.findAll ();
};
