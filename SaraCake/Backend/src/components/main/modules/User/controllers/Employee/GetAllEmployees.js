const models = require ('../../models');

module.exports = () => {
  return models.Employee.findAll ({
    attributes: ['emp_id', 'personal_code'],
  });
};
