var express = require ('express');
var router = express.Router ();

const GetAllTags = require ('./GetAllTags');

router.get ('/all', GetAllTags); // checked

module.exports = router;
