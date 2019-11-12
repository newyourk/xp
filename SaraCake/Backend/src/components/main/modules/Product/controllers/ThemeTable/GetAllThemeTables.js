const models = require ('../../models');

module.exports = () => {
  return models.ThemeTable.findAll ({
    include: [
      {
        model: models.Cake,
      },
    ],
  });
};
