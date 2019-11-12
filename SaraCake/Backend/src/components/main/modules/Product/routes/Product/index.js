var express = require ('express');
var router = express.Router ();

const GetAllProducts = require ('./GetAllProducts');

const GetProductByType = require ('./GetProductByType');

router.post ('/all', GetAllProducts);
router.post ('/:type', GetProductByType);

module.exports = router;
