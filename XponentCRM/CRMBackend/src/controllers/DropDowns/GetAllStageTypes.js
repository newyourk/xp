const Models = require ('../../models');

module.exports = () => {
  return Models.StageType.findAll ();
};
