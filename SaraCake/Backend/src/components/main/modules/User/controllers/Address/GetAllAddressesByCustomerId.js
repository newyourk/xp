const models = require ('../../models');

module.exports = payload => {
  return models.Address.findAll ({
    include: [
      {
        model: models.City,
      },
      {
        model: models.Province,
      },
    ],
    where: {
      customer_id: payload.customer_id,
    },
  });
};
