var express = require ('express');
var router = express.Router ();

const Authentication = require ('../../../middlewares/Authentication');
const Authorization = require ('../../../middlewares/Authorization');

const GetAllDropDowns = require ('./GetAllDropDowns');

router.get ('/', GetAllDropDowns); //checked

module.exports = router;
