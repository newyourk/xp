const models = require ('../../models');

module.exports = (is_doublecake, is_active) => {
  return models.Taste.findAll ({
    where: {
      is_doublecake: is_doublecake,
      is_active: is_active,
    },
  });
};
