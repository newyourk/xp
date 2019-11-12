const Models = require ('../../models');

module.exports = payload => {
  return Models.User.update (
    {
      password: payload.password,
    },
    {
      where: {
        user_id: payload.user_id,
      },
    }
  );
};
