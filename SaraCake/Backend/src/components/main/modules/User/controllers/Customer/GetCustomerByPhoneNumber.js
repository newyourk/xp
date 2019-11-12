const models = require ('../../models');

module.exports = async payload => {
  return models.Customer.findAll ({
    where: {
      customer_mobile: payload.customer_mobile,
    },
  });
};
