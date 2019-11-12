const models = require ('../../models');

module.exports = payload => {
  return models.SignupCode.destroy ({
    where: {
      customer_mobile: payload.customer_mobile,
    },
  });
};
