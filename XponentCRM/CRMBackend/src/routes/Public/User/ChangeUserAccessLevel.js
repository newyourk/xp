var ErrorGeneration = require ('../../../functions/ErrorGeneration/Two_Arg');
const User = require ('../../../controllers/User');
const InputValidation = require ('../../../functions/InputValidation/User/ChangeUserAccessLevel');

module.exports = (req, res, next) => {
  //Input Validation
  var error = InputValidation (req.body);
  if (error) {
    error.httpStatusCode = 399;
    return next (error);
  }

  User.ChangeUserAccessLevel (req.body)
    .then (result => {
      res.status (200).json (result);
    })
    .catch (err => {
      return next (ErrorGeneration (err, 400));
    });
};
