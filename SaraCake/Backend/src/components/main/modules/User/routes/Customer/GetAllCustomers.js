const Customer = require ('../../controllers/Customer');

module.exports = (req, res, next) => {
  Customer.GetAllCustomers ()
    .then (rows => {
      res.status (200).json (rows);
    })
    .catch (err => {
      const error = new Error (err);
      error.httpStatusCode = 400;
      return next (error);
    });
};
