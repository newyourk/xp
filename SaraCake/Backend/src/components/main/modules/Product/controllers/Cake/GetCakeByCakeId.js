const models = require ('../../models');

module.exports = payload => {
  return models.Cake.findAll ({
    where: {
      cake_id: payload.cake_id,
    },
  });
};
