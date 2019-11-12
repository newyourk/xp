var ErrorGeneration = require ('../../../functions/ErrorGeneration/Two_Arg');
const sequelize = require ('../../../../server/database/dbconnection');
const Controllers = require ('../../../controllers/');
const InputValidation = require ('../../../functions/InputValidation/Comment');

module.exports = (req, res, next) => {
  var FinalResult = {};

  //Input Validation
  var error = InputValidation.Createcomment (req.body);
  if (error) {
    error.httpStatusCode = 399;
    return next (error);
  }

  sequelize.transaction ().then (t => {
    Controllers.Comments
      .CreateComment (req.body, t)
      .then (result => {
        FinalResult = result;
        Controllers.Brand.UpdateLastFollowUp (
          {
            brand_id: result.brand_id,
            brand_lastfollowup: result.updatedAt,
          },
          t
        );
      })
      .then (() => {
        t.commit ();
        res.status (200).json (FinalResult);
      })
      .catch (err => {
        t.rollback ();
        return next (ErrorGeneration (err, 400));
      });
  });
};
