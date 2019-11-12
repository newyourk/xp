const models = require ('../../../../modules/shared/Relations');

module.exports = payload => {
  return models.Tag.findAll ({
    where: {
      category_id: payload.category_id,
    },
  });
};
