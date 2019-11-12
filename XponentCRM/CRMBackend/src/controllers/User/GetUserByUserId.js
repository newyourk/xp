const Models = require ('../../models');

module.exports = payload => {
  return Models.User.findAll ({
    attributes: {exclude: ['password']},
    where: {
      user_id: payload.user_id,
    },
  });
};
