const Joi = require ('@hapi/joi');

module.exports = data => {
  const schema = Joi.object ({
    user_id: Joi.number ().integer ().min (1).required (),
    user_fullname: Joi.string ().min (5).max (20).required (),
    username: Joi.string ().alphanum ().min (6).max (20).required (),
    user_mobile: Joi.number ().integer ().min (11),
    user_email: Joi.string ().email (),
    user_img_src: Joi.string (),
  });
  try {
    return Joi.assert (data, schema);
  } catch (err) {
    return err;
  }
};
