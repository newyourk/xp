var express = require ('express');
var router = express.Router ();

const CreateCustomer = require ('./CreateCustomer');
const GetAllCustomers = require ('./GetAllCustomers');
const GetCustomerByCustomerId = require ('./GetCustomerByCustomerId');
const UpdateCustomerInfo = require ('./UpdateCustomerInfo');

router.post ('/', CreateCustomer); //checked
router.get ('/all', GetAllCustomers); //checked
router.get ('/:id', GetCustomerByCustomerId); //checked
router.put ('/', UpdateCustomerInfo);

module.exports = router;
