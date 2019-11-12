var express = require ('express');
var router = express.Router ();

const GetAllCities = require ('./GetAllCities');
const GetCitiesByProvinceId = require ('./GetCitiesByProvinceId');
const GetCityByCityId = require ('./GetCityByCityId');

router.get ('/all', GetAllCities); //checked
router.get ('/province/:id', GetCitiesByProvinceId); //checked
router.get ('/:id', GetCityByCityId); //checked

module.exports = router;
