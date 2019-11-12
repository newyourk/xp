const Controllers = require ('../../controllers');

const TokenGeneration = require ('../../../../../shared/functions/TokenGeneration');

var sha512 = require ('js-sha512').sha512;
// var encode = require ('nodejs-base64-encode');

module.exports = (req, res, next) => {
  var token = '';
  var sign = false;
  var customer_info = {};

  if (
    typeof req.body.customer_mobile !== 'undefined' &&
    typeof req.body.code !== 'undefined'
  ) {
    // var code = sha512 (encode.decode (req.body.code, 'base64') + 'smsCode');
    var code = sha512 (req.body.code + 'smsCode');
    var CustomerObject = req.body.customer_mobile;

    Controllers.SignupCode
      .CheckSmsCode ({
        customer_mobile: req.body.customer_mobile,
        code: code,
      })
      .then (result => {
        if (result.length < 1) {
          throw new Error ('Invalid Code');
        }
        return Promise.resolve ();
      })
      .then (() =>
        Controllers.Customer
          .GetCustomerByPhoneNumber ({
            customer_mobile: req.body.customer_mobile,
          })
          .then (result => {
            if (result.length >= 1) {
              customer_info = result[0];
              console.log (customer_info);

              sign = true;
            }
            return Promise.resolve ();
          })
          .then (() => {
            if (sign) {
              token = TokenGeneration (CustomerObject);
              res.status (202).json ({
                result: 'Sign In',
                token: token,
                customer_info: customer_info,
              });
            } else {
              console.log ('***Create New Customer***');
              Controllers.Customer.CreateCustomer ({
                customer_mobile: req.body.customer_mobile,
              });
              token = TokenGeneration (CustomerObject);
              res.status (201).json ({
                result: 'Sign Up',
                token: token,
              });
              return Promise.resolve ();
            }
          })
          .then (() => {
            Controllers.SignupCode.DeleteCodeByCustomerMobile ({
              customer_mobile: req.body.customer_mobile,
            });
            return Promise.resolve ();
          })
          .catch (err => {
            next (err);
          })
      );
  } else res.status (406).json ({result: 'missing inputs'});
};
