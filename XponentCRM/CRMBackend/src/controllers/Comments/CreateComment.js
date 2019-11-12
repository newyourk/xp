const Models = require ('../../models');

module.exports = (payload, t) => {
  return Models.Comments.create (
    {
      comment_content: payload.comment_content,
      user_id: payload.user_id,
      brand_id: payload.brand_id,
    },
    {
      transaction: t,
    }
  );
};
