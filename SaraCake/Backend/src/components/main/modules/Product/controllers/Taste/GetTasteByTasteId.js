const models = require ('../../models');

module.exports = payload => {
  return models.Taste.findAll ({
    where: {
      taste_id: payload.taste_id,
    },
  });
};
