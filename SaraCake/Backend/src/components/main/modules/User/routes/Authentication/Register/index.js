var express = require('express');
var router = express.Router();

const CreateUser = require('./CreateUser');
const SendCode = require('./SendCode');


router.post('/createuser', CreateUser);
router.post('/sendcode', SendCode);


module.exports = router;