const models = require ('../../models');

module.exports = payload => {
  return models.Address.destroy ({
    where: {
      address_id: payload.address_id,
      customer_id: payload.customer_id,
    },
  });
};
