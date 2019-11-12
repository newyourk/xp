const models = require ('../../../../modules/shared/Relations');

module.exports = payload => {
  return models.Tag.create ({
    tag_name: payload.tag_name,
    category_id: payload.category_id,
  });
};
