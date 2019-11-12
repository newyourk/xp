const Controllers = require ('../../controllers');
const sequelize = require ('../../../../../../../server/database/dbconnection');
const productValidator = require ('../../utils/inputValidator')
  .productValidation;

module.exports = (req, res, next) => {
  const FinalResult = {};

  // const Error1 = productValidator (req.body);
  // if (Error1) {
  //   Error1.httpStatusCode = 399;
  //   return next (Error1);
  // }

  sequelize.transaction ().then (t => {
    Controllers.Product
      .InsertProduct (req.body, t)
      .then (result => {
        FinalResult['Product'] = result;
        req.body.product_id = result.product_id;
        return Controllers.Cake.InsertCake (req.body, t);
      })
      .then (result => {
        FinalResult['Cake'] = result;
        t.commit ();
        res.status (202).json (FinalResult);
      })
      .catch (err => {
        t.rollback ();
        const error = new Error (err);
        error.httpStatusCode = 400;
        return next (error);
      });
  });
};
