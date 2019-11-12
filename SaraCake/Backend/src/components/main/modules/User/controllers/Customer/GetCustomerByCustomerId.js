const models = require ('../../models');

module.exports = payload => {
  return models.Customer.findAll ({
    attributes: [
      'customer_id',
      'customer_mobile',
      'customer_firstname',
      'customer_lastname',
    ],
    where: {
      customer_id: payload.customer_id,
    },
  });
};
