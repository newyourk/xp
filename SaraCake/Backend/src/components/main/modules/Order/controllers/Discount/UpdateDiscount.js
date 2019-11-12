const models = require ('../../models');

module.exports = (payload, t) => {
  return models.Discount.update (
    {
      is_used: payload.is_used,
    },
    {
      where: {
        discount_id: payload.discount_id,
      },
      transaction: t,
    }
  );
};
