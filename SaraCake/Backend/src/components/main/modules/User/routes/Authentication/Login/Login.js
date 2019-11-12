const User = require('../../../../controllers/User');
const UserKey = require('../../../../controllers/UserKey');
var sha512 = require('js-sha512').sha512;
var encode = require('nodejs-base64-encode');
var randomstring = require('randomstring');

module.exports = (req, res) => {
  if (
    (typeof req.body.u_mobile !== 'undefined' ||
      typeof req.body.u_username !== 'undefined') &&
    typeof req.body.u_password !== 'undefined'
  ) {
    var password = sha512(
      encode.decode(req.body.u_password, 'base64') +
        'MmZhYTUwYTMzMDI4YzVkYjU0NzE5ZjhjNzZkYTgwZTA='
    );

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
        if (req.body.u_username) {
          return User.Login({
            u_username: req.body.u_username,
            u_password: password
          });
        } else if (req.body.u_mobile) {
          return User.Login({
            u_mobile: req.body.u_mobile,
            u_password: password
          });
        }
      })
      .then(result => {
        if (result.length < 1)
          throw {
            result: 'Username or password is wrong.',
            code: '406'
          };
        else {
          return Promise.resolve(result);
        }
      })
      .then(result => {
        var key = encode.encode(
          sha512(randomstring.generate(50) + new Date().toString() + password),
          'base64'
        );
        return Promise.all([
          result,
          UserKey.CreateKey({
            u_id: result[0].u_id,
            keysecret: key,
            access_level: result[0].access_level
          })
        ]);
      })
      .then(result => {
        res.status(200).json({
          result: 'success',
          keysecret: result[1].keysecret,
          data: result[0]
        });
      })
      .catch(err => {
        console.log('err :', err);
        if (err.code) res.status(err.code).json(err.result);
        else res.status(400).json(err);
      });
  } else res.status(406).json({ result: 'missing inputs' });
};
