const models = require ('../../models');

module.exports = payload => {
  return models.City.findAll ({
    where: {
      province_id: payload.province_id,
    },
  });
};
