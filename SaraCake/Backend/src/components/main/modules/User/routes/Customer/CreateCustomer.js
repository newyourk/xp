const Customer = require ('../../controllers/Customer');

module.exports = (req, res, next) => {
  Customer.CreateCustomer (req.body)
    .then (result => {
      res.status (200).json (result);
    })
    .catch (err => {
      const error = new Error (err);
      error.httpStatusCode = 400;
      return next (error);
    });
};
