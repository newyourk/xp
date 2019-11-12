const Models = require ('../../models');

module.exports = payload => {
  return Models.People.findAll ({
    where: {
      brand_id: payload.brand_id,
    },
  });
};
