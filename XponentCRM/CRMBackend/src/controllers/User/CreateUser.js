const Models = require ('../../models');

module.exports = payload => {
  return Models.User.create ({
    user_fullname: payload.user_fullname,
    username: payload.username,
    password: payload.password,
  });
};
