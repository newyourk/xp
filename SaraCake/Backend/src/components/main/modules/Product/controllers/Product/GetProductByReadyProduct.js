const models = require ('../../../shared/Relations');

module.exports = (is_exist, is_active) => {
  return models.Product.findAll ({
    include: [
      {
        model: models.ReadyProduct,
        required: true,
      },
    ],
    where: {
      is_exist: is_exist,
      is_active: is_active,
    },
  });
};
