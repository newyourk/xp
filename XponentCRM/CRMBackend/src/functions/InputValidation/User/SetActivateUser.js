const Joi = require ('@hapi/joi');

module.exports = data => {
  const schema = Joi.object ({
    user_id: Joi.number ().integer ().min (1).required (),
    is_active: Joi.boolean ().default (1).required (),
  });
  try {
    return Joi.assert (data, schema);
  } catch (err) {
    return err;
  }
};
