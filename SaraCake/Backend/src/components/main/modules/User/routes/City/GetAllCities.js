const City = require ('../../controllers/City');

module.exports = (req, res) => {
  City.GetAllCities ()
    .then (rows => {
      res.status (200).json (rows);
    })
    .catch (err => {
      res.status (400).json (err);
    });
};
