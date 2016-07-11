/**
 * Created by Administrator on 2016/4/21.
 */
var login=require('express')();
var user_hc=require('../hc/hc.js');
login.get('/login',function(req,res){
    res.render('login',{
        title:'hdj聊天室登陆',
        stylelist:['/stylesheets/talk.css']
    })
})
login.get('/talk',function(req,res){
    res.render('talk',{
        scriptlist:['/socket.io/socket.io.js','/javascripts/socket.js'],
        stylelist:['/stylesheets/talk.css']
    })
})
login.get('/login_input',function(req,res){
    res.render('login_input',{
        stylelist:['/stylesheets/talk.css'],
        scriptlist:['/javascripts/login.js']
    })
})
login.get('/sendimg',function(req,res){
    res.render('sendimg',{
        stylelist:['/stylesheets/talk.css'],
        scriptlist:['/javascripts/sendimg.js']
    })
});
login.get('/talklist',function(req,res){
    var tx=user_hc.user.img;
    var username=user_hc.user.username;
    res.render('talklist',{
        title:'hdj聊天室登陆',
        stylelist:['/stylesheets/talk.css'],
        scriptlist:['/socket.io/socket.io.js','/javascripts/socket.js'],
        txImg:tx,
        user:username
    });
})
module.exports=login;