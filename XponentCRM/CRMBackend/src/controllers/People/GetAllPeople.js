const Models = require ('../../models');

module.exports = () => {
  return Models.People.findAll ();
};
