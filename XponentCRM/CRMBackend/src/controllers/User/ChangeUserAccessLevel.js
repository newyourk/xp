const Models = require ('../../models');

module.exports = payload => {
  return Models.User.update (
    {
      access_level: payload.access_level,
    },
    {
      where: {
        user_id: payload.user_id,
      },
    }
  );
};
