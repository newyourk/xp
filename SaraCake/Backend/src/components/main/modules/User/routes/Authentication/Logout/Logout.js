const User = require('../../../../controllers/User');
const UserKey = require('../../../../controllers/UserKey');
var sha512 = require('js-sha512').sha512;
var encode = require('nodejs-base64-encode');
var randomstring = require('randomstring');

module.exports = (req, res) => {
  UserKey.Logout({
    u_id: req.body.u_id,
    keysecret: req.body.keysecret
  })
    .then(result => {
      console.log(result);
      res.status(200).json({
        result: 'User logout successfully.'
      });
    })
    .catch(err => {
      if (err.code) res.status(err.code).json(err.result);
      else res.status(400).json(err);
    });
};
