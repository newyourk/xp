const models = require ('../../models');

module.exports = payload => {
  return models.Customer.update (
    {
      customer_firstname: payload.customer_firstname,
      customer_lastname: payload.customer_lastname,
      customer_email: payload.customer_email,
      customer_birthdate: payload.customer_birthdate,
    },
    {
      where: {
        customer_id: payload.customer_id,
      },
    }
  );
};
