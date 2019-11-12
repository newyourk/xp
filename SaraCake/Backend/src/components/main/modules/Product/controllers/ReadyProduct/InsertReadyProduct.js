const models = require ('../../models');

module.exports = (payload, t) => {
  return models.ReadyProduct.create (
    {
      product_id: payload.product_id,
      readyproduct_count: payload.readyproduct_count,
    },
    {
      transaction: t,
    }
  );
};
