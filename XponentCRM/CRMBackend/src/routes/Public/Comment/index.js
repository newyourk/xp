var express = require ('express');
var router = express.Router ();

const Authentication = require ('../../../middlewares/Authentication');
const Authorization = require ('../../../middlewares/Authorization');

const CreateComment = require ('./CreateComment');

router.post ('/', CreateComment); //checked

module.exports = router;
