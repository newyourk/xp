var express = require ('express');
var router = express.Router ();

const AuthRoute = require ('./Auth');
const SendCodeRoute = require ('./SendCode');

router.post ('/auth', AuthRoute);
router.post ('/sendcode', SendCodeRoute);

module.exports = router;
