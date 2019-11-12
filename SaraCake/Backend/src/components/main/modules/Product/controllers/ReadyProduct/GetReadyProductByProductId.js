const models = require ('../../models');

module.exports = payload => {
  return models.ReadyProduct.findAll ({
    where: {
      product_id: payload.product_id,
    },
  });
};
