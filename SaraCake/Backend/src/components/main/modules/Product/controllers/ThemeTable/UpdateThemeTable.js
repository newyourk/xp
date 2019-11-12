const models = require ('../../models');

module.exports = payload => {
  return models.ReadyProduct.update (
    {
      product_id: payload.product_id,
      cake_id: payload.cake_id,
      accessory_id: payload.accessory_id,
      thematable_totalprice: payload.thematable_totalprice,
    },
    {
      where: {
        thematable_id: payload.thematable_id,
      },
    }
  );
};
