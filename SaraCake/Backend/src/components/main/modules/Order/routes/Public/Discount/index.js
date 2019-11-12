var express = require('express');
var router = express.Router();

const GetDiscount = require('./GetDiscount');


router.post('/', GetDiscount);



module.exports = router;