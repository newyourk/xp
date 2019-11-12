const Controllers = require ('../../controllers');

module.exports = (req, res, next) => {
  if (
    typeof req.params.type !== undefined &&
    typeof req.params.is_exist !== undefined
  ) {
    const type = req.params.type;
    const is_exist = req.body.is_exist;
    const is_active = req.body.is_active;

    Controllers.Product
      .GetProductByType (type, is_exist, is_active)
      .then (result => {
        res.status (200).send (result);
      })
      .catch (err => {
        const error = new Error (err);
        error.httpStatusCode = 400;
        return next (error);
      });
  } else res.status (406).json ({result: 'missing inputs'});
};
