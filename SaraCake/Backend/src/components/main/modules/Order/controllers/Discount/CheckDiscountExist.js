const models = require ('../../../../modules');
const Sequelize = require ('sequelize');

module.exports = payload => {
  return models.OrderModels.Discount.findAll ({
    where: {
      discount_code: payload.discount_code,
      [Sequelize.Op.and]: [
        Sequelize.literal (
          'TIMESTAMPDIFF(MINUTE,NOW(), discount_expiration_date) >= 0'
        ),
      ],
    },
  });
};
