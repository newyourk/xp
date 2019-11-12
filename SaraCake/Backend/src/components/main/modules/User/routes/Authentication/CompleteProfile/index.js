var express = require('express');
var router = express.Router();
const Authentication = require('../../../../middleware/Authentication');
const Authorization = require('../../../../middleware/Authorization');

const UpdateUser = require('./UpdateUser');

router.put('/', Authentication, UpdateUser);

module.exports = router;
