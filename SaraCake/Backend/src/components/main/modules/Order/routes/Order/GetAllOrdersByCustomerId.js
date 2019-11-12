const Order = require ('../../controllers/Order');
const UserKey = require ('../../../User/controllers/UserKey');

module.exports = (req, res) => {
  if (
    typeof req.body.keysecret !== 'undefined' &&
    typeof req.body.customer_id !== 'undefined'
  ) {
    UserKey.GetKeyByUId ({
      customer_id: req.body.customer_id,
      keysecret: req.body.keysecret,
    })
      .then (result => {
        if (result.length < 1)
          throw {
            result: 'Forbidden content.',
            code: '403',
          };
        else {
          return Promise.resolve (result);
        }
      })
      .then (result => {
        return Order.GetAllOrdersByUIdShort ({
          customer_id: result[0].customer_id,
        });
      })
      .then (result => {
        //console.log('result :', result);
        res.status (200).json (result);
      })
      .catch (err => {
        console.log (err);
        if (err.code) res.status (err.code).json (err.result);
        else res.status (400).json (err);
      });
  } else res.status (406).json ({result: 'missing inputs'});
};
