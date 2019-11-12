const Controllers = require ('../../controllers');

module.exports = (req, res) => {
  Controllers.Tag
    .GetAllTags ()
    .then (rows => {
      res.status (200).json (rows);
    })
    .catch (err => {
      res.status (400).json (err);
    });
};
