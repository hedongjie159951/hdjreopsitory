/**
 * Created by Administrator on 2016/5/1.
 */
$(function(){
        send()
});
var send=function(){
    var btn=$('.send_login');
    btn.on('click',function(){
        var admin=$('.user_name').val();
        var pwd=$('.user_pwd').val();
        var Data={
            admin:admin,
            pwd:pwd
        };
        $.ajax({
            url:'/login',
            type:'post',
            data:Data,
            success:function(data){
                if (data.status==1){
                    window.location.href='http://localhost:3000/sendimg'
                }
            }
        })
    })
}