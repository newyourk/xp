const Address = require ('../../../User/controllers/Address');
const UserKey = require ('../../../User/controllers/UserKey');
const City = require ('../../../User/controllers/City');
const Province = require ('../../../User/controllers/Province');

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
        return Promise.all ([
          Address.GetAllAddressesByUId ({
            customer_id: result[0].customer_id,
          }),
          City.GetAllCities (),
          Province.GetAllProvinces (),
        ]);
      })
      .then (data => {
        console.log ('result :', data);
        res.status (200).json ({
          data: data[0],
          cities: data[1],
          provinces: data[2],
        });
      })
      .catch (err => {
        console.log (err);
        if (err.code) res.status (err.code).json (err.result);
        else res.status (400).json (err);
      });
  } else res.status (406).json ({result: 'missing inputs'});
};
