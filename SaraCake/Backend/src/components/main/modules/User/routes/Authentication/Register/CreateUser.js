const SignupCode = require('../../../../controllers/SignupCode');
const User = require('../../../../controllers/User');
const UserKey = require('../../../../controllers/UserKey');
var sha512 = require('js-sha512').sha512;
var encode = require('nodejs-base64-encode');
var randomstring = require('randomstring');

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
    var code = sha512(encode.decode(req.body.code, 'base64') + 'smsCode');
    var key = encode.encode(
      sha512(randomstring.generate(50) + new Date().toString() + password),
      'base64'
    );

    User.CheckUserPhoneNumber({
      u_mobile: req.body.u_mobile
    })
      .then(result => {
        if (result.length > 0)
          throw {
            result: 'User already exists.',
            code: '409'
          };
        else {
          return Promise.resolve();
        }
      })
      .then(() => {
        return SignupCode.CheckSmsCode({
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
        let register = await User.CreateUser({
          u_mobile: req.body.u_mobile,
          u_password: password
        });
        let deleteCode = await SignupCode.DeleteCodeByUMobile({
          u_mobile: req.body.u_mobile
        });

        return Promise.all([register, deleteCode]);
      })
      .then(result => {
        return UserKey.CreateKey({
          u_id: result[0].u_id,
          keysecret: key,
          access_level: result[0].access_level
        });
      })
      .then(result => {
        res
          .status(201)
          .json({ result: 'success', keysecret: key, u_id: result.u_id });
      })
      .catch(err => {
        if (err.code) res.status(err.code).json(err.result);
        else res.status(400).json(err);
      });
  } else res.status(406).json({ result: 'missing inputs' });
};
