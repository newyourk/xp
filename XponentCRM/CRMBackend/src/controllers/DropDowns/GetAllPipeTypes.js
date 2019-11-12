const Models = require ('../../models');

module.exports = () => {
  return Models.PipeType.findAll ();
};
