const models = require ('../../models');

module.exports = payload => {
  return models.Address.findAll ({
    where: {
      address_id: payload.address_id,
      customer_id: payload.customer_id,
    },
  });
};
