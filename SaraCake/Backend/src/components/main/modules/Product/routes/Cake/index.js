var express = require ('express');
var router = express.Router ();

const GetAllCakes = require ('./GetAllCakes');
const GetCakeByCakeId = require ('./GetCakeByCakeId');
const InsertCake = require ('./InsertCake');
const UpdateCake = require ('./UpdateCake');

router.post ('/all', GetAllCakes); //checked
router.post ('/:id', GetCakeByCakeId); //checked
router.post ('/', InsertCake); //checked
router.put ('/', UpdateCake); //checked

module.exports = router;
