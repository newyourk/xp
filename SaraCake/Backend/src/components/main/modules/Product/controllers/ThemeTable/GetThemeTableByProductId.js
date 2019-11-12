const models = require ('../../models');

module.exports = payload => {
  return models.ThemeTable.findAll ({
    where: {
      product_id: payload.product_id,
    },
  });
};
