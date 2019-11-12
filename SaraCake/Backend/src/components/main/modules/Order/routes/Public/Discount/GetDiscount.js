const Discount = require ('../../../controllers/Discount');
const UserKey = require ('../../../../User/controllers/UserKey');

module.exports = (req, res) => {
  if (
    typeof req.body.keysecret !== 'undefined' &&
    typeof req.body.u_id !== 'undefined' &&
    typeof req.body.discount_code !== 'undefined'
  ) {
    UserKey.GetKeyByUId ({
      u_id: req.body.u_id,
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
      .then (user => {
        return Promise.all ([
          user[0].u_id,
          Discount.CheckDiscountExist ({
            discount_code: req.body.discount_code,
          }),
        ]);
      })
      .then (result => {
        if (result[1].length < 1)
          throw {
            result: 'Discount is invalid',
            code: '404',
          };
        else if (result[1][0].is_personal == 1 && result[1][0].is_used == 1)
          throw {
            result: 'Discount is used',
            code: '406',
          };
        else if (result[1][0].is_personal == 1 && result[1][0].is_used == 0)
          throw {
            result: result[1][0],
            code: '200',
          };
        else
          return Promise.all ([
            result[1][0],
            Discount.CheckPublicDiscount ({
              u_id: result[0],
              discount_code: req.body.discount_code,
            }),
          ]);
      })
      .then (result => {
        if (result[1].length > 0)
          throw {
            result: 'Discount is used',
            code: '406',
          };
        else res.status (200).json (result[0]);
        console.log ('result :', result);
      })
      .catch (err => {
        console.log (err);
        if (err.code) res.status (err.code).json (err.result);

        res.status (400).json (err);
      });
  } else res.status (406).json ({result: 'missing inputs'});
};
