var express = require('express');
var router = express.Router();
const Authentication = require('../../../../middleware/Authentication');
const Authorization = require('../../../../middleware/Authorization');

const Logout = require('./Logout');

router.post('/', Authentication, Logout);

module.exports = router;
