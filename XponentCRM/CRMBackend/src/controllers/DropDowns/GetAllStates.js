const Models = require ('../../models');

module.exports = () => {
  return Models.State.findAll ();
};
