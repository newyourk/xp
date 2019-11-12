var ErrorGeneration = require ('../../../functions/ErrorGeneration/Two_Arg');
const DropDowns = require ('../../../controllers/DropDowns/');
const Brand = require ('../../../controllers/Brand/');

module.exports = (req, res, next) => {
  Promise.all ([
    Brand.GetAllBrands (),
    DropDowns.GetAllPipeTypes (),
    DropDowns.GetAllServiceType (),
    DropDowns.GetAllStageTypes (),
    DropDowns.GetAllStates (),
    DropDowns.GetAllSuccessPercents (),
  ])
    .then (result => {
      res.status (200).json ({
        Brands: result[0],
        pipeType: result[1],
        services: result[2],
        stages: result[3],
        states: result[4],
        successPercent: result[5],
      });
    })
    .catch (err => {
      return next (ErrorGeneration (err, 400));
    });
};
