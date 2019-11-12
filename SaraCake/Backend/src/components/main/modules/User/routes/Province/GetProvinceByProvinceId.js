const Province = require ('../../controllers/Province');

module.exports = (req, res) => {
  Province.GetProvinceByProvinceId ({
    province_id: req.params.id,
  })
    .then (rows => {
      res.status (200).json (rows);
    })
    .catch (err => {
      res.status (400).json (err);
    });
};
