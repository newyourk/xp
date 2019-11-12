const models = require ('../../models');

module.exports = payload => {
  return models.Address.update (
    {
      address_address: payload.address_address,
      address_postcode: payload.address_postcode,
      city_id: payload.city_id,
      province_id: payload.province_id,
    },
    {
      where: {
        address_id: payload.address_id,
        customer_id: payload.customer_id,
      },
    }
  );
};
