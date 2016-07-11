/**
 * Created by Administrator on 2016/4/19.
 */
function _get(){
    client.set("string key", "Hello World", function (err, reply) {
        console.log(reply.toString());
    });
}