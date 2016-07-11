var express = require('express');
var router = express.Router();
var request=require('request');
/* GET home page. */
router.get('/', function(req, res, next) {
  request.get('http://www.baidu.com/',function(err,res,data){
   if (data.oo){
     console.log('5646546')
   }else {
     console.log('没有')
   }
  })
  if (!req.session.user){
    res.render('index', { title: 'Express' });
  }else {
    if (req.session.finder){
      res.render('index', { title: '你大爷那么菜' });
    }else {
      res.render('index', { title: '贺东杰' });
    }
  }
});


module.exports = router;
