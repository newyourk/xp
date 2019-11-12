const models = require ('../../models');
var moment = require ('moment-timezone');

module.exports = payload => {
  var now = new moment ()
    .add (1, 'hours')
    .format ('YYYY-MM-DD HH:mm:ss')
    .toString ();

  return models.SignupCode.upsert ({
    customer_mobile: payload.customer_mobile,
    code: payload.code,
    expiration_date: now,
  });
};
