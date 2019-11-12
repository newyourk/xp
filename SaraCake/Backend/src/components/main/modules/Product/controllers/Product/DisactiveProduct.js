const models = require ('../../models');

module.exports = payload => {
  return models.Product.update (
    {
      is_active: false,
    },
    {
      where: {
        product_id: payload.product_id,
      },
    }
  );
};
