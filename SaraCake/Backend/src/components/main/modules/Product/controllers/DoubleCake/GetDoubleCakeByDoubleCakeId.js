const models = require ('../../models');

module.exports = payload => {
  return models.DoubleCake.findAll ({
    where: {
      doublecake_id: payload.doublecake_id,
    },
  });
};
