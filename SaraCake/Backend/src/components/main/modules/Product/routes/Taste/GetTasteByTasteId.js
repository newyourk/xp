const Controllers = require ('../../controllers');

module.exports = (req, res, next) => {
  Controllers.Taste
    .GetTasteByTasteId ({
      taste_id: req.params.id,
    })
    .then (rows => {
      res.status (200).json (rows);
    })
    .catch (err => {
      const error = new Error (err);
      error.httpStatusCode = 400;
      return next (error);
    });
};
