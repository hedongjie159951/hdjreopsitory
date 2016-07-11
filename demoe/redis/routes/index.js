var express = require('express');
var app=express();
var router = express.Router();
var redis=require('./redis');
var get=require('./getredis');
/* GET home page. */
router.get('/', function(req, res, next) {
  get(redis);
  res.render('index', { title: 'Express' });
});

module.exports = router;
