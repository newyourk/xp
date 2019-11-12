var express = require ('express');
var router = express.Router ();

const GetAccessoryByAccessoryId = require ('./GetAccessoryByAccessoryId');
const GetAllAccessories = require ('./GetAllAccessories');
const InsertAccessory = require ('./InsertAccessory');
const UpdateAccessory = require ('./UpdateAccessory');

router.get ('/:id', GetAccessoryByAccessoryId); //checked
router.get ('/all', GetAllAccessories);
router.post ('/', InsertAccessory); //checked
router.put ('/', UpdateAccessory); //checked

module.exports = router;
