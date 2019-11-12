const Controllers = require ('../../controllers');

module.exports = (req, res, next) => {
  var FinalResult = {};
  Controllers.Cake
    .GetCakeByCakeId ({
      cake_id: req.params.id,
    })
    .then (result => {
      FinalResult['Cake'] = result[0];
      let c = Controllers.Taste.GetTasteByTasteId ({
        taste_id: result[0].taste_id,
      });
      return Promise.all ([c]);
    })
    .then (result => {
      FinalResult['Taste'] = result[0];
      res.status (200).json (FinalResult);
    })
    .catch (err => {
      const error = new Error (err);
      error.httpStatusCode = 400;
      return next (error);
    });
};
