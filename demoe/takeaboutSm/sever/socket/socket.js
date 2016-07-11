/**
 * Created by Administrator on 2016/4/24.
 */
var socket=require('socket.io');
var hc=require('../router/hc/hc.js');
var userArry=[];
var socket_io=function(sever){
    var io=socket.listen(sever);
    var user={};
    var ID=0;
    io.sockets.on('connection',function(req){
        //存入对应ID的SOCKET对象
        ID++;
        var SelfId=hc.user.username+ID;
        //存入对象
        user[SelfId]=req;
        var alluser={
            id:SelfId,
            name:hc.user
        };
        req.emit('login_L',userArry);
        //分配ID；
        userArry.push(alluser);
        sendID(req,SelfId,function(){
            sendres(io,alluser,'login')
        })
        req.on('sendsl',function(data){
               var SendId=data.ID;
            var message=data.message;
            Sl(user,SendId,message)
        })
        req.on('send',function(data){
            sendres(io,data,'receive')
        })
    })
};
//广播
var sendres=function(req,data,event){
    req.sockets.emit(event,data)
};
//私聊
var Sl=function(obj,Id,message){
    if (Id in obj){
        obj[Id].emit(Id,message)
    }
};
var sendID=function(req,ID,callback){
    req.emit('give ID',ID);
    callback()
}

module.exports=socket_io;
