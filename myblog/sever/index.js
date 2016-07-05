var express = require('express');
var router = express.Router();
var fs=require('fs');
var path=require('path');
/* GET home page. */
router.get('/', function(req, res, next) {
  var imgUrl=path.join(__dirname,'..','public/images');
  var newimgUrl=path.join(__dirname,'..','public/img');
  //移动文件
  fs.rename(imgUrl+'/1.jpg',newimgUrl+'/2.jpg',function(err){
    if (!err){
      console.log('成功')
    }else {
      console.log(err)
    }
  });
  res.render('index', { title: 'Express' });
});

module.exports = router;
