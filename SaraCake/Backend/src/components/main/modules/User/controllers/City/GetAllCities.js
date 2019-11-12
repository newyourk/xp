const City = require ('../../models/City');

module.exports = () => {
  return City.findAll ({});
};
