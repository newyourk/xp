const Models = require ('../../models');

module.exports = () => {
  return Models.Brand.findAll ({
    include: [
      {
        model: Models.People,
        model: Models.Comments,
      },
    ],
  });
};
