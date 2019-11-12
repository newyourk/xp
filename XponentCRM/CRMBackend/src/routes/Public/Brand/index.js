var express = require ('express');
var router = express.Router ();

const Authentication = require ('../../../middlewares/Authentication');
const Authorization = require ('../../../middlewares/Authorization');

const CreateBrand = require ('./CreateBrand');
const GetAllBrands = require ('./GetAllBrands');
const GetBrandByBrandId = require ('./GetBrandByBrandId');
const GetBrandByUserId = require ('./GetBrandByUserId');
const UpdateBrand = require ('./UpdateBrand');

router.post ('/', CreateBrand); //checked
router.get ('/all', GetAllBrands); //checked
router.get ('/:id', GetBrandByBrandId); //checked
router.post ('/get_by_userid', GetBrandByUserId); //checked
router.put ('/', UpdateBrand); //checked

module.exports = router;
