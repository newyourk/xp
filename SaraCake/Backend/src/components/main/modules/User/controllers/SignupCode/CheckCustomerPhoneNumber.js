const models = require ('../../models');

module.exports = async payload => {
  return models.SignupCode.findAll ({
    where: {
      customer_mobile: payload.customer_mobile,
    },
  });
};
