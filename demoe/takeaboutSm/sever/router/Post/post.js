/**
 * Created by Administrator on 2016/5/1.
 */
var Post=require('express')();
var user=require('./user');
Post.use('/',user);
module.exports=Post;