var express = require('express');
var router = express.Router();

const UpdatePassword = require('./UpdatePassword');
const SendCode = require('./SendCode');


router.put('/updatepassword', UpdatePassword);
router.post('/sendcode', SendCode);


module.exports = router;