/**
 * Created by Administrator on 2016/4/19.
 */
var GET=function(obj){
    obj.get('string key',function(err,res){
        console.log(res.toString())
    })
}
module.exports = GET;