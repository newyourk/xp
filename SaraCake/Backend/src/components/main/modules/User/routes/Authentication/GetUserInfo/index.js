var express = require('express');
var router = express.Router();
const Authentication = require('../../../../middleware/Authentication');
const Authorization = require('../../../../middleware/Authorization');

const GetUserInfo = require('./GetUserInfo');

router.post('/', Authentication, GetUserInfo);

module.exports = router;
