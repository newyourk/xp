const models = require ('../../models');

module.exports = payload => {
  return models.Province.findAll ({
    where: {
      province_id: payload.province_id,
    },
  });
};
