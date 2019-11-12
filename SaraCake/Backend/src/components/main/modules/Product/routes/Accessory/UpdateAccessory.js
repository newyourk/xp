const Controllers = require ('../../controllers');

module.exports = (req, res, next) => {
  Controllers.Accessory
    .UpdateAccessory (req.body)
    .then (rows => {
      res.status (202).json (rows);
    })
    .catch (err => {
      const error = new Error (err);
      error.httpStatusCode = 400;
      return next (error);
    });
};
