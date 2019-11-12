const UserKey = require('../../../../controllers/UserKey');
const User = require('../../../../controllers/User');

module.exports = (req, res) => {
  User.GetUserByUId({
    u_id: req.body.u_id
  })
    .then(result => {
      res.status(200).json(result);
    })
    .catch(err => {
      if (err.code) res.status(err.code).json(err.result);
      else res.status(400).json(err);
    });
};
