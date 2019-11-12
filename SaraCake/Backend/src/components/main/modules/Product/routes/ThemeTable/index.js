var express = require ('express');
var router = express.Router ();

const auth = require ('../../../../../shared/middlewares/Authentication');

const GetAllThemeTables = require ('./GetAllThemeTables');
const GetThemeTableByThemeTableId = require ('./GetThemeTableByThemeTableId');
const InsertThemeTable = require ('./InsertThemeTable');
const UpdateThemeTable = require ('./UpdateThemeTable');

router.get ('/all', GetAllThemeTables); //checked
router.get ('/:id', GetThemeTableByThemeTableId); //checked
router.post ('/', InsertThemeTable); //checked
router.put ('/', UpdateThemeTable); //checked

module.exports = router;
