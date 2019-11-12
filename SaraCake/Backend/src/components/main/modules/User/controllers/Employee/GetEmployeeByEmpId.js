const models = require ('../../models');

module.exports = payload => {
  return models.Employee.findAll ({
    where: {
      emp_id: payload.emp_id,
    },
  });
};
