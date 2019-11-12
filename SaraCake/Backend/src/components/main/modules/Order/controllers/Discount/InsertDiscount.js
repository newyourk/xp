const models = require ('../../models');

module.exports = payload => {
  return models.Discount.create ({
    discount_name: payload.discount_name,
    discount_code: payload.discount_code,
    discount_value: payload.discount_value,
    discount_expiration_date: payload.discount_expiration_date,
    is_personal: payload.is_personal,
    is_used: 0,
  });
};
