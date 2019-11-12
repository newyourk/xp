const Controllers = require ('../../controllers');

module.exports = (req, res, next) => {
  if (typeof req.params.type !== undefined) {
    Controllers.Taste
      .GetTastesByType (req.params.type)
      .then (result => {
        res.status (200).json (result);
      })
      .catch (err => {
        const error = new Error (err);
        error.httpStatusCode = 400;
        return next (error);
      });
  } else res.status (406).json ({result: 'missing inputs'});
};
