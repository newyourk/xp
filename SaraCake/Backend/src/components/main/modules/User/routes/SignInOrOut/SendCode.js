const Controllers = require ('../../controllers');
var sha512 = require ('js-sha512').sha512;

var error;

module.exports = (req, res, next) => {
  if (typeof req.body.customer_mobile !== undefined) {
    var smsCode = Math.floor (100000 + Math.random () * 900000); //generate sms code with 6 digits
    var code = sha512 (smsCode + 'smsCode'); // hashing the code

    Controllers.SignupCode
      .CheckCustomerPhoneNumber (req.body)
      // .then (result => {
      //   if (result.length > 0) {
      //     throw new Error ('customer already exists');
      //   } else {
      //     return Promise.resolve (result);
      //   }
      // })
      .then (() => {
        return Controllers.SignupCode.CreateCode ({
          customer_mobile: req.body.customer_mobile,
          code: code,
        });
      })
      .then (() => {
        //
        // ─── SMS module has to be inserted ────────────────────────────────────────────────────────────
        //
        // remove this line
        console.log (smsCode);
        res.status (200).json ({
          result: 'SMS has been sent to your mobile phone.',
          code: smsCode,
        });
      })
      .catch (err => {
        error = new Error (err);
        error.httpStatusCode = 409;
        next (error);
      });
  } else res.status (420).json ({result: 'missing inputs'});
};
