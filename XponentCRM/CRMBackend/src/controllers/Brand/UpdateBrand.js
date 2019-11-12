const Models = require ('../../models');

module.exports = payload => {
  return Models.Brand.update (
    {
      brand_name: payload.brand_name,
      brand_code: payload.brand_code,
      brand_ceo_fullname: payload.brand_ceo_fullname,
      brand_pipetype: payload.brand_pipetype,
      brand_stagetype: payload.brand_stagetype,
      brand_servicetype: payload.brand_servicetype,
      brand_lastfollowup: payload.brand_lastfollowup,
      brand_nextfollowup: payload.brand_nextfollowup,
      brand_successpercent: payload.brand_successpercent,
      brand_contractamount: payload.brand_contractamount,
      brand_state: payload.brand_state,
      brand_phone: payload.brand_phone,
      brand_address: payload.brand_address,
      brand_instagram: payload.brand_instagram,
      brand_website: payload.brand_website,
    },
    {
      where: {
        brand_id: payload.brand_id,
      },
    }
  );
};
