var express = require ('express');
var router = express.Router ();

const Authentication = require ('../../../middlewares/Authentication');
const Authorization = require ('../../../middlewares/Authorization');

const changeUserAccessLevel = require ('./changeUserAccessLevel');
const ChangeUserPassword = require ('./ChangeUserPassword');
const CreateUser = require ('./CreateUser');
const GetUserByUserId = require ('./GetUserByUserId');
const Login = require ('./Login');
const UpdateUserInfo = require ('./UpdateUserInfo');

router.put ('/change_accesslevel', changeUserAccessLevel); //checked
router.put ('/change_password', ChangeUserPassword); //checked
router.post ('/', CreateUser); //checked
router.get ('/:id', GetUserByUserId); //checked
router.post ('/login', Login); //checked
router.put ('/', UpdateUserInfo); //checked

module.exports = router;
