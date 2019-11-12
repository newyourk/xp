var ErrorGeneration = require ('../../../functions/ErrorGeneration/Two_Arg');
const Brand = require ('../../../controllers/Brand');

module.exports = (req, res, next) => {
  Brand.GetAllBrands ()
    .then (result => {
      res.status (200).json (result);
    })
    .catch (err => {
      return next (ErrorGeneration (err, 400));
    });
};
