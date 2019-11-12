const Controllers = require ('../../controllers');

module.exports = (req, res, next) => {
  if (typeof req.params.id !== undefined) {
    Promise.all ([
      Controllers.Category.GetCategoryByCategoryId ({
        category_id: req.params.id,
      }),
      Controllers.Tag.GetAllTagsByCategoryId ({
        category_id: req.params.id,
      }),
      Controllers.Product.GetAllProducts ({
        category_id: req.params.id,
      }),
    ])
      .then (result => {
        res.status (200).json ({
          category: result[0],
          tags: result[1],
          products: result[2],
        });
      })
      .catch (err => {
        console.log (err);
        if (err.code) {
          res.status (err.code).json (err.result);
        } else {
          error.httpStatusCode = 400;
        }
        const error = Error (err);
        return next (error);
      });
  } else res.status (406).json ({result: 'missing inputs'});
};
