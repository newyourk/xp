const models = require ('../../models');

module.exports = payload => {
  return models.ReadyProduct.update (
    {
      product_id: payload.product_id,
      readyproduct_count: payload.readyproduct_count,
    },
    {
      where: {
        readyproduct_id: payload.readyproduct_id,
      },
    }
  );
};
