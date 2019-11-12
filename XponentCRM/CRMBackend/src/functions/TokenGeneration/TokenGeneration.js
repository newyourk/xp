const jwt = require ('jsonwebtoken');

module.exports = payload => {
  const token = jwt.sign ({payload}, 'secretkey', {expiresIn: '1 days'});
  return token;
};
