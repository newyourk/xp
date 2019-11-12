const models = require ('../../models');
const Sequelize = require ('sequelize');

module.exports = payload => {
  return models.SignupCode.findAll ({
    where: {
      customer_mobile: payload.customer_mobile,
      code: payload.code,
      [Sequelize.Op.and]: [
        Sequelize.literal ('TIMESTAMPDIFF(MINUTE,NOW(), expiration_date) >= 0'),
      ],
    },
  });
};
