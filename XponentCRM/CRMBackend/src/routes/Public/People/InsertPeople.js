var ErrorGeneration = require ('../../../functions/ErrorGeneration/Two_Arg');
const People = require ('../../../controllers/People');
const InputValidation = require ('../../../functions/InputValidation/People');

module.exports = (req, res, next) => {
  //Input Validation
  var error = InputValidation.InsertPeople (req.body);
  if (error) {
    error.httpStatusCode = 399;
    return next (error);
  }

  People.InsertPeople (req.body)
    .then (result => {
      res.status (200).json (result);
    })
    .catch (err => {
      return next (ErrorGeneration (err, 400));
    });
};
