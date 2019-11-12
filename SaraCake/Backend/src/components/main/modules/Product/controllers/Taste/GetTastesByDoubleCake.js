const models = require ('../../models');

module.exports = is_active => {
  return models.Taste.findAll ({
    where: {
      is_doulecake: true,
      is_active: is_active,
    },
  });
};
