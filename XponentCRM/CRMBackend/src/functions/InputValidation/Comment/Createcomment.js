const Joi = require ('@hapi/joi');

module.exports = data => {
  const schema = Joi.object ({
    comment_content: Joi.string ().min (3).max (1000).required (),
    user_id: Joi.number ().integer ().min (1).required (),
    brand_id: Joi.number ().integer ().min (1).required (),
  });
  try {
    return Joi.assert (data, schema);
  } catch (err) {
    return err;
  }
};
