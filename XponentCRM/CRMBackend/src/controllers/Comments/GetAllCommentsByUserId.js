const Models = require ('../../models');

module.exports = payload => {
  return Models.Comments.findAll ({
    where: {
      user_id: payload.user_id,
    },
  });
};
