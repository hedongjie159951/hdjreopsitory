var express = require('express');
var login=require('./login/login');
var router = express();
/* GET home page. */
router.use('/',login);
module.exports = router;
