const models = require ('../../models');

module.exports = payload => {
  return models.Category.findAll ({
    where: {
      category_id: payload.category_id,
    },
  });
};
