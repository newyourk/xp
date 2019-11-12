var express = require ('express');
var router = express.Router ();

const GetAllProvinces = require ('./GetAllProvinces');
const GetProvinceByProvinceId = require ('./GetProvinceByProvinceId');

router.get ('/all', GetAllProvinces); //checked
router.get ('/:id', GetProvinceByProvinceId); //checked

module.exports = router;
