const models = require ('../../models');

module.exports = payload => {
  return models.ThemeTable.findAll ({
    where: {
      themetable_id: payload.themetable_id,
    },
  });
};
