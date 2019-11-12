const Models = require ('../../models');

module.exports = () => {
  return Models.SuccessPercent.findAll ();
};
