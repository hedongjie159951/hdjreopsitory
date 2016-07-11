/**
 * Created by Administrator on 2016/5/1.
 */
var user=require('express')();
var user_hc=require('../hc/hc.js');
user.post('/login',function(req,res,next){
    res.send({
       status:'1'
    });
})
user.post('/usernews',function(req,res,next){
    user_hc.userfu(req.body)
    res.send({
        status:'1'
    })
});
module.exports=user;