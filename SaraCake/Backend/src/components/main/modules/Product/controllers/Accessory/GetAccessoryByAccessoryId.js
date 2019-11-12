const models = require ('../../models');

module.exports = payload => {
  return models.Accessory.findAll ({
    where: {
      accessory_id: payload.accessory_id,
    },
  });
};
