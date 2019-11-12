const Customer = require ('../../controllers/Customer');

module.exports = (req, res, next) => {
  Customer.GetCustomerByCustomerId ({
    customer_id: req.params.id,
  })
    .then (rows => {
      res.status (200).json (rows);
    })
    .catch (err => {
      const error = new Error (err);
      error.httpStatusCode = 500;
      return next (error);
    });
};
