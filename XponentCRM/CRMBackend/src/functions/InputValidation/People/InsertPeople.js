const Joi = require ('@hapi/joi');

module.exports = data => {
  const schema = Joi.object ({
    pp_fullname: Joi.string ().min (3).max (100).required (),
    pp_role: Joi.string ().min (3).max (100),
    pp_mobile: Joi.number ().integer ().min (11),
    brand_id: Joi.number ().integer ().min (1).required (),
  });
  try {
    return Joi.assert (data, schema);
  } catch (err) {
    return err;
  }
};
