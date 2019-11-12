const models = require ('../../models');

module.exports = payload => {
  return models.Address.create ({
    address_address: payload.address_address,
    address_postcode: payload.address_postcode,
    customer_id: payload.customer_id,
    city_id: payload.city_id,
    province_id: payload.province_id,
  });
};
