/**
 * Created by Administrator on 2016/4/24.
 */
$(function(){
    var socket_io=io.connect();
    var Socket=function(){
        this.init();
    }
    Socket.prototype={
        init:function(){
            this.Send();
            this.sendres();
            this.Id='';
            this.needId();
            this.login();
            this.login_L();
        },
        Send:function(){
         var btn=$('.send_btn');
            var Self=this;
            btn.on('click',function(){
               var Val=$('.input_send').val();
                var Data={
                    ID:Self.Id,
                    message:Val
                };
                var Dom=$('<div class="text_right">'+Val+'</div>');
                Dom.appendTo('.show_box');
               $('.input_send').val('');
                socket_io.emit('send',Data)
            })
        },
        sendres:function(){
            var Self=this;
            socket_io.on('receive',function(data){
                if (data.ID!==Self.Id){
                    var  Dom=$('<div>'+data.message+'</div>')
                    Dom.appendTo('.show_box')
                }
            })
        },
        needId:function (){
            var Self=this;
        socket_io.on('give ID',function(data){
            Self.Id=data;
            Self.SelfTalk(data)
        })
    },
        //私聊事件
        SelfTalk:function(event){
           socket_io.on(event,function(data){
               var  Dom=$('<div>'+data+'</div>')
               Dom.appendTo('.show_box')
           })
        },
        //接收登陆信息
        login:function(){
            var Self=this;
            socket_io.on('login',function(data){
                if (data.id!==Self.Id){
                    var Dom_L=$('<div class="clearfix user_box"><span class="user_img"><img src="'+data.name.img+'"/></span>' +
                        '<span class="user_name">'+data.name.username+'</span></div>');
                    Dom_L.appendTo('.admin_show_box')
                }
                var Dom=$('<div class="show_name_box">欢迎'+data.name.username+'上线</div>');

               Dom.appendTo('.show_login')
                var Width=Dom.outerWidth();
                var ALL=$('.show_login').outerWidth();
                Dom.css('left',-Width+'px');
                Dom.css('width',Width+'10px');
                Dom.animate({
                    left:ALL+Width+'px'
                },8000,function(){
                    Dom.remove()
                })
            })
        },
        //第一次登陆获取信息
        login_L:function(){
            var Self=this
            socket_io.on('login_L',function(data){
                for (var i in data){
                    var Dom_L=$('<div class="clearfix user_box"><span class="user_img"><img src="'+data[i].name.img+'"/></span>' +
                        '<span class="user_name">'+data[i].name.username+'</span></div>');
                    function _a(){
                        var a=data[i].id
                        Dom_L.on('click',function(){
                            new evens.binding(a)
                        });
                    }
                    _a()
                    Dom_L.appendTo('.admin_show_box')
                }
            })
        }
    }
    //时间源绑定
    var evens={
        binding:function(data){
            alert(data)
        }
    }
    new Socket();
})