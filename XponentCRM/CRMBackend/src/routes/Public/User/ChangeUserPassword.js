var ErrorGeneration = require ('../../../functions/ErrorGeneration/Two_Arg');
const User = require ('../../../controllers/User');
const InputValidation = require ('../../../functions/InputValidation/User/ChangeUserPassword');

module.exports = (req, res, next) => {
  var password = sha512 (req.body.password + 'XponentSecretKey');

  //Input Validation
  var error = InputValidation (req.body);
  if (error) {
    error.httpStatusCode = 399;
    return next (error);
  }

  User.ChangeUserPassword ({
    user_id: req.body.user_id,
    password: password,
  })
    .then (result => {
      res.status (200).json (result);
    })
    .catch (err => {
      return next (ErrorGeneration (err, 400));
    });
};
