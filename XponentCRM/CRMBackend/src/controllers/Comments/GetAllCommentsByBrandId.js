const Models = require ('../../models');

module.exports = payload => {
  return Models.Comments.findAll ({
    where: {
      brand_id: payload.brand_id,
    },
  });
};
