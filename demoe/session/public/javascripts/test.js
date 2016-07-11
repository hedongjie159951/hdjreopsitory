/**
 * Created by Administrator on 2016/4/25.
 */
$(function(){
    var test=function(){
        var btn=$('#test');
        var Data={
            lx:'find',
            con:'hdj'
        }
        btn.on('click',function(){
            $.ajax({
                url:'/test',
                data:Data,
                type:'post',
                success:function(data){
                    alert('1')
                }
            })
        })
    }
    test();
    function _a(){
        try{
            var p=2
         if (p==2) throw new Error(10,"asdasdasd")
        }
        catch(e){
            console.log(e.name)
            console.log(e.message)
        }
        finally {
            console.log('完了')
        }
    }
    _a()
})