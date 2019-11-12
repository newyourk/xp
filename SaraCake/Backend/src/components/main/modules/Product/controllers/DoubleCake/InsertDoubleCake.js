const models = require ('../../models');

module.exports = (payload, t) => {
  return models.DoubleCake.create (
    {
      product_id: payload.product_id,
      doublecake_taste_id: payload.doublecake_taste_id,
      doublecake_count: payload.doublecake_count,
    },
    {
      transaction: t,
    }
  );
};
