const Models = require ('../../models');

module.exports = (payload, t) => {
  return Models.Brand.update (
    {
      brand_lastfollowup: payload.brand_lastfollowup,
    },
    {
      where: {
        brand_id: payload.brand_id,
      },
    },
    {
      transaction: t,
    }
  );
};
