var express = require ('express');
var router = express.Router ();

const GetAllEmployees = require ('./GetAllEmployees');
const GetEmployeeByEmpId = require ('./GetEmployeeByEmpId');
const InsertEmployee = require ('./InsertEmployee');
const SetActivateEmployee = require ('./SetActivateEmployee');

router.get ('/all', GetAllEmployees);
router.get ('/employee/:id', GetEmployeeByEmpId);
router.post ('/', InsertEmployee);
router.put ('/', SetActivateEmployee);

module.exports = router;
