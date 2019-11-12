var express = require ('express');
var router = express.Router ();

const GetAllTatses = require ('./GetAllTatses');
const GetTasteByTasteId = require ('./GetTasteByTasteId');
const GetTasteByType = require ('./GetTasteByType');

router.get ('/all', GetAllTatses);
router.get ('/:id', GetTasteByTasteId);
router.get ('/:type', GetTasteByType);

module.exports = router;
