const models = require ('../../models');

module.exports = payload => {
  return models.Accessory.create ({
    accessory_name: payload.accessory_name,
    accessory_count: payload.accessory_count,
    accessory_mincount: payload.accessory_mincount,
    accessory_minprice: payload.accessory_minprice,
  });
};
