/**
 * Created by Administrator on 2016/4/24.
 */
var fs = require('fs')
    , http = require('http')
    , socketio = require('socket.io');


var server = http.createServer(function(req, res) {
    res.writeHead(200, { 'Content-type': 'text/html'});
    res.end(fs.readFileSync(__dirname + '/chatTwo_app.html'));
}).listen(8080, function() {
    console.log('Listening at: http://localhost:8080');
});

var users = {};

socketio.listen(server).on('connection', function (socket) {
    //socketio.sockets.emit('connect',{hell:'boy'});
    console.log('a user connected');
    //console.log(socket.id);
    //socket.nickName = "nickName";
    //console.log(socket.nickName);

    //发送私密消息
    socket.on('private message', function (from,to,msg) {

        console.log('I received a private message by ', from, ' say to ',to, msg);

        if(to in users){
            //console.log('to :' + to);
            users[to].emit('to'+to, {mess:msg});

        }
    });

    //新增用户
    socket.on('new user',function(data){

        if(data in users){

        }else{
            var nickname = data;

            users[nickname]= socket;
        }
        //console.info(users);
    });

    //断开连接
    socket.on('disconnect', function () {
        console.log('user disconnected');
        //socket.emit('user disconnected');
    });
});
