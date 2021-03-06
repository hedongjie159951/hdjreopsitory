var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var routes = require('./sever/router/index');
var users = require('./sever/users');
var error=require('./sever/router/error/error');
var socket=require('./sever/socket/socket');
var Post=require('./sever/router/Post/post');
var app = express();
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({"limit":"100000kb"}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/',Post);
app.use('/', routes);
app.use('/users', users);
app.use(error.setError);
app.use(error.duiError);
app.use(error.useError);

module.exports = app;
