const Joi = require ('@hapi/joi');

module.exports = data => {
  const schema = Joi.object ({
    brand_id: Joi.number ().integer ().min (1).required (),
    brand_name: Joi.string ().min (3).max (100).required (),
    brand_code: Joi.string ().alphanum ().min (3).max (100).required (),
    brand_ceo_fullname: Joi.string ().min (3).max (100),
    brand_pipetype: Joi.string ().min (3).max (100).required (),
    brand_stagetype: Joi.string ().min (3).max (100).required (),
    brand_servicetype: Joi.string ().min (3).max (100).required (),
    brand_lastfollowup: Joi.date ().required (),
    brand_nextfollowup: Joi.date ().required (),
    brand_successpercent: Joi.string ().min (3).required (),
    brand_contractamount: Joi.number ().integer ().min (1).required (),
    brand_state: Joi.string ().min (3).max (50).required (),
    brand_phone: Joi.number ().integer ().min (1).required (),
    brand_address: Joi.string ().min (3).max (1000).required (),
    brand_instagram: Joi.string ().alphanum ().min (3).max (100).required (),
    brand_website: Joi.string ().alphanum ().min (3).max (100).required (),
    user_id: Joi.number ().integer ().min (1).required (),
  });
  try {
    return Joi.assert (data, schema);
  } catch (err) {
    return err;
  }
};
