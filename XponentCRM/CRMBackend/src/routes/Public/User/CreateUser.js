var ErrorGeneration = require ('../../../functions/ErrorGeneration/Third_Arg');
const User = require ('../../../controllers/User');
const InputValidation = require ('../../../functions/InputValidation/User/CreateUserInfo');
var sha512 = require ('js-sha512').sha512;

module.exports = (req, res, next) => {
  var password = sha512 (req.body.password + 'XponentSecretKey');
  var code = '';

  //Input Validation
  var error = InputValidation (req.body);
  if (error) {
    error.httpStatusCode = 399;
    return next (error);
  }

  //Check uniqueness of username
  User.CheckUsernameUniqueness ({username: req.body.username})
    .then (result => {
      if (result.length > 0) {
        code = 409;
        throw new Error ('Username Already Exists!');
      } else {
        //Create new user with an unique username
        return User.CreateUser ({
          user_fullname: req.body.user_fullname,
          username: req.body.username,
          password: password,
        });
      }
    })
    .then (result => {
      delete result['password'];
      res.status (200).json (result);
    })
    .catch (err => {
      return next (ErrorGeneration (err, code, 400));
    });
};
