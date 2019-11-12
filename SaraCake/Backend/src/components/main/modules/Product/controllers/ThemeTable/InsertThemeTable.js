const models = require ('../../models');

module.exports = (payload, t) => {
  return models.ThemeTable.create (
    {
      product_id: payload.product_id,
      cake_id: payload.cake_id,
      accessory_id: payload.accessory_id,
      thematable_totalprice: payload.thematable_totalprice,
    },
    {
      transaction: t,
    }
  );
};
