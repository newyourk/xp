const Customer = require ('../../models/Customer');

module.exports = payload => {
  return Customer.create ({
    customer_mobile: payload.customer_mobile,
  });
};
