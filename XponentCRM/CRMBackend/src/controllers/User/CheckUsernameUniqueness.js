const Models = require ('../../models');

module.exports = payload => {
  return Models.User.findAll ({
    attributes: ['user_id'],
    where: {
      username: payload.username,
    },
  });
};
