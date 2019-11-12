const Models = require ('../../models');

module.exports = payload => {
  return Models.User.update (
    {
      user_fullname: payload.user_fullname,
      username: payload.username,
      user_mobile: payload.user_mobile,
      user_email: payload.user_email,
      user_img_src: payload.user_img_src,
    },
    {
      where: {
        user_id: payload.user_id,
      },
    }
  );
};
