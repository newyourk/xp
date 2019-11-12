var express = require ('express');
var router = express.Router ();

const Authentication = require ('../../../middlewares/Authentication');
const Authorization = require ('../../../middlewares/Authorization');

const GetAllPeople = require ('./GetAllPeople');
const GetPeopleByBrandId = require ('./GetPeopleByBrandId');
const InsertPeople = require ('./InsertPeople');
const UpdatePeople = require ('./UpdatePeople');

router.get ('/all', GetAllPeople); //checked
router.get ('/:id', GetPeopleByBrandId); //checked
router.post ('/', InsertPeople); //checked
router.put ('/', UpdatePeople); //checked

module.exports = router;
