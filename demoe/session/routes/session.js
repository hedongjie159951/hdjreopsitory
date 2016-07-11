/**
 * Created by Administrator on 2016/4/25.
 */
var session=require('express-session');
var app=require('express')();
exports.sessionSet=app.use(session({
    secret:'secret',
    resave:true,
    saveUninitialized:false,
    cookie:{
        maxAge:1000*60*60//过期时间设置(单位毫秒)
    }
}));
exports.sessionUse=app.use(function(req, res, next){
    res.locals.user = req.session.user;
    var err = req.session.error;
    res.locals.message = '';
    if (err) res.locals.message = '<div style="margin-bottom: 20px;color:red;">' + err + '</div>';
    next();
});