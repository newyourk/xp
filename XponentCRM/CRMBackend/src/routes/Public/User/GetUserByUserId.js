var ErrorGeneration = require ('../../../functions/ErrorGeneration/Two_Arg');
const InputValidation = require ('../../../functions/InputValidation/User/GetUserByUserId');
const User = require ('../../../controllers/User');

module.exports = (req, res, next) => {
  //Input Validation
  var error = InputValidation ({
    user_id: req.params.id,
  });
  if (error) {
    error.httpStatusCode = 399;
    return next (error);
  }

  User.GetUserByUserId ({
    user_id: req.params.id,
  })
    .then (result => {
      res.status (200).json (result);
    })
    .catch (err => {
      return next (ErrorGeneration (err, 400));
    });
};
