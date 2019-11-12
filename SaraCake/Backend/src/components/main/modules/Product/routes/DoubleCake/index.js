var express = require ('express');
var router = express.Router ();

const GetAllDoubleCakes = require ('./GetAllDoubleCakes');
const GetDoubleCakeByDoubleCakeId = require ('./GetDoubleCakeByDoubleCakeId');
const InsertDoubleCake = require ('./InsertDoubleCake');
const UpdateDoubleCake = require ('./UpdateDoubleCake');

router.get ('/all', GetAllDoubleCakes); //checked
router.get ('/:id', GetDoubleCakeByDoubleCakeId); //checked
router.post ('/', InsertDoubleCake); //checked
router.put ('/', UpdateDoubleCake); //checked

module.exports = router;
