const Controllers = require ('../../controllers');

module.exports = (req, res, next) => {
  Controllers.Cake
    .GetAllCakes ()
    .then (result => {
      res.status (200).json (result);
    })
    .catch (err => {
      const error = new Error (err);
      error.httpStatusCode = 400;
      return next (error);
    });
};
