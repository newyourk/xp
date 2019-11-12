var ErrorGeneration = require ('../../../functions/ErrorGeneration/Third_Arg');
const UserControllers = require ('../../../controllers/User');
const InputValidation = require ('../../../functions/InputValidation/User/Login');
const TokenGeneration = require ('../../../functions/TokenGeneration/TokenGeneration');
var sha512 = require ('js-sha512').sha512;
// var encode = require ('nodejs-base64-encode');

module.exports = (req, res, next) => {
  var token = '';
  // var code = sha512 (encode.decode (req.body.code, 'base64') + 'smsCode');
  var password = sha512 (req.body.password + 'XponentSecretKey');
  var code;

  //Input Validation
  var error = InputValidation (req.body);
  if (error) {
    error.httpStatusCode = 399;
    return next (error);
  }

  UserControllers.Login ({
    username: req.body.username,
    password: password,
  })
    .then (result => {
      console.log (result[0].user_id);
      if (result.length < 1) {
        code = 401;
        throw new Error ('Invalid username or password');
      } else {
        token = TokenGeneration (result[0].user_id);
        res.status (202).json ({
          result: 'Logged In',
          token: token,
          customer_info: result,
        });
        return Promise.resolve ();
      }
    })
    .catch (err => {
      return next (ErrorGeneration (err, code, 400));
    });
};
