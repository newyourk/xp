const Joi = require ('@hapi/joi');

module.exports = data => {
  const schema = Joi.object ({
    user_fullname: Joi.string ().min (5).max (20).required (),
    username: Joi.string ().min (6).max (20).alphanum ().required (),
    password: Joi.string ().min (6).max (20).required (),
  });
  try {
    return Joi.assert (data, schema);
  } catch (err) {
    return err;
  }
};
