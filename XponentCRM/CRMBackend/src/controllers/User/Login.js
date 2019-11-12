const Models = require ('../../models');

module.exports = payload => {
  return Models.User.findAll ({
    attributes: {exclude: ['password']},
    where: {
      username: payload.username,
      password: payload.password,
    },
  });
};
