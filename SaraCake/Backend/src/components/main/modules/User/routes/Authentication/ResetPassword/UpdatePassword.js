const ForgotPasswordCode = require('../../../../controllers/ForgotPasswordCode');
const User = require('../../../../controllers/User');
//const UserKey = require('../../../../controllers/UserKey');
var sha512 = require('js-sha512').sha512;
var encode = require('nodejs-base64-encode');
//var randomstring = require("randomstring");

module.exports = (req, res) => {
  if (
    typeof req.body.u_mobile !== 'undefined' &&
    typeof req.body.u_password !== 'undefined' &&
    typeof req.body.code !== 'undefined'
  ) {
    var password = sha512(
      encode.decode(req.body.u_password, 'base64') +
        'MmZhYTUwYTMzMDI4YzVkYjU0NzE5ZjhjNzZkYTgwZTA='
    );
    //samte angular password hash mishe bad encode mishe
    var code = sha512(encode.decode(req.body.code, 'base64') + 'smsCode');

    User.CheckUserPhoneNumber({
      u_mobile: req.body.u_mobile
    })
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
        return ForgotPasswordCode.CheckSmsCode({
          u_mobile: req.body.u_mobile,
          code: code
        });
      })
      .then(result => {
        if (result.length < 1)
          throw {
            result: 'Invalid Code.',
            code: '406'
          };
        else {
          return Promise.resolve();
        }
      })
      .then(async () => {
        let update = await User.UpdateUserPassword({
          u_mobile: req.body.u_mobile,
          u_password: password
        });
        let deleteCode = await ForgotPasswordCode.DeleteCodeByMobile({
          u_mobile: req.body.u_mobile
        });

        return Promise.all([update, deleteCode]);
      })
      .then(result => {
        res
          .status(200)
          .json({ result: 'Your password has been reset successfully.' });
      })
      .catch(err => {
        console.log(err);
        if (err.code) res.status(err.code).json(err.result);
        else res.status(400).json(err);
      });
  } else res.status(406).json({ result: 'missing inputs' });
};
