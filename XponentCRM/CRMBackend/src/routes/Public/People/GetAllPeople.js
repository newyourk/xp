var ErrorGeneration = require ('../../../functions/ErrorGeneration/Two_Arg');
const People = require ('../../../controllers/People');

module.exports = (req, res, next) => {
  People.GetAllPeople ()
    .then (result => {
      res.status (200).json (result);
    })
    .catch (err => {
      return next (ErrorGeneration (err, 400));
    });
};
