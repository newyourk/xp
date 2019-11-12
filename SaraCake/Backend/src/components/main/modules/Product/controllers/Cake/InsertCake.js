const models = require ('../../models');

module.exports = (payload, t) => {
  return models.Cake.create (
    {
      product_id: payload.product_id,
      taste_id: payload.taste_id,
      cake_floorcount: payload.cake_floorcount,
      cake_weight: payload.cake_weight,
      is_ttcake: payload.is_ttcake,
    },
    {
      transaction: t,
    }
  );
};
