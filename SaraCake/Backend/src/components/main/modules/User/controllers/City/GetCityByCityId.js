const models = require ('../../models');

module.exports = payload => {
  return models.City.findAll ({
    where: {
      city_id: payload.city_id,
    },
  });
};
