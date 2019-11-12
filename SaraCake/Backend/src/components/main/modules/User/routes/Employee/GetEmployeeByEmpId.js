const Employee = require ('../../controllers/Employee');

module.exports = (req, res) => {
  Employee.GetAllCustomers ({
    emp_id: req.params.id,
  })
    .then (rows => {
      res.status (200).json (rows);
    })
    .catch (err => {
      res.status (400).json (err);
    });
};
