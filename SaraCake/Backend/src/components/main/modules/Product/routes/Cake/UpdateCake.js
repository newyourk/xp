const Controllers = require ('../../controllers');
const sequelize = require ('../../../../../../../server/database/dbconnection');
const FinalResult = {};
const productValidator = require ('../../utils/inputValidator')
  .productValidation;

module.exports = (req, res, next) => {
  // const Error = productValidator (req.body);
  // if (Error) {
  //   Error.httpStatusCode = 399;
  //   return next (Error);
  // }

  sequelize.transaction ().then (t => {
    Controllers.Product
      .UpdateProduct (req.body, t)
      .then (result => {
        FinalResult['Product'] = result;
        req.body.product_id = result.product_id;
        return Controllers.Cake.UpdateCake (req.body, t);
      })
      .then (result => {
        FinalResult['Cake'] = result;
        t.commit ();
        res.status (203).json (FinalResult);
      })
      .catch (err => {
        t.rollback ();
        const error = new Error (err);
        error.httpStatusCode = 400;
        return next (error);
      });
  });
};
