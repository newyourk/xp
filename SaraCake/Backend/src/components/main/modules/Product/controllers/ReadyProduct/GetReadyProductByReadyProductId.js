const models = require ('../../models');

module.exports = payload => {
  return models.ReadyProduct.findAll ({
    where: {
      readyproduct_id: payload.readyproduct_id,
    },
  });
};
