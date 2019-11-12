var express = require('express');
var router = express.Router();

const Login = require('./Login');

router.post('/', Login);


module.exports = router;