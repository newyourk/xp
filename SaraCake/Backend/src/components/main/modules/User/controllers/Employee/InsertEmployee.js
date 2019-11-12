const models = require ('../../models');

module.exports = (payload, t) => {
  return models.Employee.create (
    {
      national_id: payload.national_id,
      emp_id: payload.emp_id,
      personal_code: payload.personal_code,
    },
    {
      transaction: t,
    }
  );
};
