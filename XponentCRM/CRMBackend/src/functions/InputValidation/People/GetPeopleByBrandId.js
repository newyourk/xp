const Joi = require ('@hapi/joi');

module.exports = data => {
  const schema = Joi.object ({
    brand_id: Joi.number ().integer ().min (1).required (),
  });
  try {
    return Joi.assert (data, schema);
  } catch (err) {
    return err;
  }
};
