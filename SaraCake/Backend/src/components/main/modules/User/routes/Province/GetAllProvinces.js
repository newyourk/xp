const Province = require ('../../controllers/Province');

module.exports = (req, res) => {
  Province.GetAllProvinces ()
    .then (rows => {
      res.status (200).json (rows);
    })
    .catch (err => {
      res.status (400).json (err);
    });
};
