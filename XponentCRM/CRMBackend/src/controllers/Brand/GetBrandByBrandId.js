const Models = require ('../../models');

module.exports = payload => {
  return Models.Brand.findAll (
    {
      include: [
        {
          model: Models.People,
          model: Models.Comments,
        },
      ],
    },
    {
      where: {
        brand_id: payload.brand_id,
      },
    }
  );
};
