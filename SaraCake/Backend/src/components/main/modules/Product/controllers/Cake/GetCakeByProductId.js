const models = require ('../../models');

module.exports = payload => {
  return models.Cake.findAll ({
    where: {
      product_id: payload.product_id,
    },
  });
};
