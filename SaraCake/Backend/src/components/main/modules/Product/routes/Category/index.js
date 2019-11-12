var express = require ('express');
var router = express.Router ();

const GetCategoryByCategoryId = require ('./GetCategoryByCategoryId');
const GetAllCategories = require ('./GetAllCategories');

router.get ('/:id', GetCategoryByCategoryId); // checked
router.get ('/all', GetAllCategories);

module.exports = router;
