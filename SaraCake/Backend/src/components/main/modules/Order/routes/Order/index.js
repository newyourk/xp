var express = require ('express');
var router = express.Router ();

const CreateCakeOrder = require ('./CreateCakeOrder');
const CreateDoubleCakeOrder = require ('./CreateDoubleCakeOrder');
const CreateReadyProductOrder = require ('./CreateReadyProductOrder');
const CreateThemeTableOrder = require ('./CreateThemeTableOrder');
const GetAllOrdersByCustomerId = require ('./GetAllOrdersByCustomerId');

router.post ('/createcakeorder', CreateCakeOrder);
router.get ('/createdoublecakeorder', CreateDoubleCakeOrder);
router.get ('/createreadyproductorder', CreateReadyProductOrder);
router.get ('/createthemetableOorder', CreateThemeTableOrder);
router.get ('/all', GetAllOrdersByCustomerId);

module.exports = router;
