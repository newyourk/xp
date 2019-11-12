const models = require ('../../models');

module.exports = payload => {
  return models.Cake.findAll ({
    where: {
      is_exist: payload.is_exist,
      is_active: payload.is_active,
    },
  });
};
