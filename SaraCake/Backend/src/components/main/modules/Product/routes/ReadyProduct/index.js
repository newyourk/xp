var express = require ('express');
var router = express.Router ();

const GetAllReadyProducts = require ('./GetAllReadyProducts');
const GetReadyProductByReadyProductId = require ('./GetReadyProductByReadyProductId');
const InsertReadyProduct = require ('./InsertReadyProduct');
const UpdateReadyProduct = require ('./UpdateReadyProduct');

router.get ('/all', GetAllReadyProducts);
router.get ('/:id', GetReadyProductByReadyProductId);
router.post ('/', InsertReadyProduct);
router.put ('/', UpdateReadyProduct);

module.exports = router;
