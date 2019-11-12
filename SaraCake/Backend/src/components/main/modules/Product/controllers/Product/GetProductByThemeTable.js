const models = require ('../../../shared/Relations');

module.exports = (is_exist, is_active) => {
  return models.Product.findAll ({
    include: [
      {
        model: models.ThemeTable,
        required: true,
        include: [
          {
            model: models.Cake,
            include: [
              {
                model: models.Product,
              },
            ],
          },
        ],
      },
    ],
    where: {
      is_exist: is_exist,
      is_active: is_active,
    },
  });
};
