const Address = require ('../../../User/controllers/Address');
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
        return Address.UpdateAddress ({
          address_address: req.body.address_address,
          address_postcode: req.body.address_postcode,
          city_id: req.body.city_id,
          province_id: req.body.province_id,
          address_id: req.body.address_id,
          customer_id: result[0].customer_id,
        });
      })
      .then (result => {
        console.log ('result :', result);
        res.status (200).json ('Address has been updated successfully.');
      })
      .catch (err => {
        console.log (err);
        if (err.code) res.status (err.code).json (err.result);
        else res.status (400).json (err);
      });
  } else res.status (406).json ({result: 'missing inputs'});
};
