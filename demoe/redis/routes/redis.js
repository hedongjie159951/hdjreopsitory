/**
 * Created by Administrator on 2016/4/19.
 */
var redis=require('redis');
 var Redis=function(){
     var a=0;
    var client = redis.createClient(6379,'localhost',{});
    client.on("error", function (err) {
       Redis()
    });
    client.on("connect",function(){
      console.log('来了')
    });
     return client
}
module.exports = Redis();