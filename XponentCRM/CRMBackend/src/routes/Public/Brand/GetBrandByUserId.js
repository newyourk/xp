var ErrorGeneration = require ('../../../functions/ErrorGeneration/Two_Arg');
const Brand = require ('../../../controllers/Brand');
const InputValidation = require ('../../../functions/InputValidation/Brand/');

module.exports = (req, res, next) => {
  //Input Validation
  var error = InputValidation.GetBrandByUserId (req.body);
  if (error) {
    error.httpStatusCode = 399;
    return next (error);
  }

  Brand.GetBrandByUserId ({
    user_id: req.body.user_id,
  })
    .then (result => {
      res.status (200).json (result);
    })
    .catch (err => {
      return next (ErrorGeneration (err, 400));
    });
};
