var ErrorGeneration = require ('../../../functions/ErrorGeneration/Two_Arg');
const People = require ('../../../controllers/People');
const InputValidation = require ('../../../functions/InputValidation/People');

module.exports = (req, res, next) => {
  //Input Validation
  var error = InputValidation.GetPeopleByBrandId ({
    brand_id: req.params.id,
  });
  if (error) {
    error.httpStatusCode = 399;
    return next (error);
  }
  People.GetPeopleByBrandId ({
    brand_id: req.params.id,
  })
    .then (result => {
      res.status (200).json (result);
    })
    .catch (err => {
      return next (ErrorGeneration (err, 400));
    });
};
