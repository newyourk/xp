const Models = require ('../../models');

module.exports = () => {
  return Models.ServiceType.findAll ();
};
