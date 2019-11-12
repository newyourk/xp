const UserKey = require('../../../../controllers/UserKey');
const User = require('../../../../controllers/User');

module.exports = (req, res) => {
  User.UpdateUserInfo({
    u_id: req.body.u_id,
    u_firstname: req.body.u_firstname,
    u_lastname: req.body.u_lastname,
    u_username: req.body.u_username,
    u_phone: req.body.u_phone,
    u_email: req.body.u_email
  })
    .then(() => {
      res
        .status(200)
        .json({ result: 'User information has been updated successfully' });
    })
    .catch(err => {
      if (err.code) res.status(err.code).json(err.result);
      else res.status(400).json(err);
    });
};
