/**
 * Created by Administrator on 2016/5/1.
 */
var sendimg=function(){
    this.init();
}
sendimg.prototype={
    init:function(){
        this.Click();
        this.fileObj();
        this.Ajax();
        this.base='';
    },
    Click:function(){
        var btn=$('.show_file')
        btn.on('click',function(){
            $('.file').click()
        })
    },
    fileObj:function(){
        var btn=$('.file');
        var Self=this
        btn.on('change',function(){
            var File=this.files[0]
            Self.fileM(File,Self)
        })
    },
    fileM:function(obj,Self){
        if (obj.size>500000){
            alert('文件过大')
        }else if (!/image\/\w+/.test(obj.type)){
            alert('请上传图片格式的头像')
        }
        else {
            var filerender=new FileReader();
            filerender.readAsDataURL( obj );
            filerender.onload=function(e){
                Self.base=this.result;
                var html='<img src="'+Self.base+'"/>';
                 $('.show_img_box').html(html)
            }
        }
    },
    Ajax:function(){
        var btn=$('.send_btn');
        var Self=this
        btn.on('click',function(){
            var name=$('.user_name').val();
            if (name==''||Self.base==''){
                alert('请输入完整信息')
            }else {
                var Data={
                    img:Self.base,
                    username:name
                }
                $.ajax({
                    url:'/usernews',
                    type:'post',
                    data:Data,
                    success:function(data){
                        if (data.status==1){
                            window.location.href='http://localhost:3000/talklist'
                        }
                    }
                })
            }
        })
    }
}
$(function(){
    new sendimg()
})