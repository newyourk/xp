const ForgotPasswordCode = require('../../../../controllers/ForgotPasswordCode');
const User = require('../../../../controllers/User');
var sha512 = require('js-sha512').sha512;
var encode = require('nodejs-base64-encode');

module.exports = (req, res) => {
  if (typeof req.body.u_mobile !== 'undefined') {
    var smsCode = Math.floor(100000 + Math.random() * 900000); //generate sms code with 6 digits
    var code = sha512(smsCode + 'smsCode'); // hashing the code

    User.CheckUserPhoneNumber(req.body)
      .then(result => {
        if (result.length < 1)
          throw {
            result: 'User does not exist.',
            code: '409'
          };
        else {
          return Promise.resolve();
        }
      })
      .then(() => {
        return ForgotPasswordCode.CreateCode({
          u_mobile: req.body.u_mobile,
          code: code
        });
      })
      .then(x => {
        //
        // ─── SMS module has to be inserted ────────────────────────────────────────────────────────────
        //
        // remove this line
        console.log(smsCode);
        res.status(200).json({
          result: 'SMS has been sent to your mobile phone.'
        });
      })
      .catch(err => {
        if (err.code) res.status(err.code).json(err.result);
        else res.status(400).json(err);
      });
  } else res.status(406).json({ result: 'missing inputs' });
};
