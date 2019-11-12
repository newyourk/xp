const models = require ('../../models');

module.exports = payload => {
  return models.Employee.update (
    {
      is_active: payload.is_active,
    },
    {
      where: {
        emp_id: payload.emp_id,
      },
    }
  );
};
