const models = require ('../../models');

module.exports = payload => {
  return models.DoubleCake.update (
    {
      product_id: payload.product_id,
      doublecake_taste_id: payload.doublecake_taste_id,
      doublecake_count: payload.doublecake_count,
    },
    {
      where: {
        doublecake_id: payload.doublecake_id,
      },
    }
  );
};
