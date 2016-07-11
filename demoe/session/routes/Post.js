/**
 * Created by Administrator on 2016/4/25.
 */
var Post=require('express')();
var multiple=require('multiparty');
var util =require('util');
var fs=require('fs');
Post.post('/test',function(req,res){
    var lx=req.body.lx;0
    var Data={
        statas:'1'
    };
    req.session.finder=lx;
    req.session.user='hdj'
    res.send(Data)
})
Post.post('/file/uploading', function(req, res, next){
    //生成multiparty对象，并配置上传目标路径
    var form = new multiple.Form();
    form.uploadDir='./public/images/'//配置路径 相对服务器的路径
        //form.encoding='utf-8' 设置字符编码;
        //form.maxFontSize='2*1024*1024' 文件大小
    //上传完成后处理
   form.parse(req, function(err, fields, files) {
     var filesTmp = JSON.stringify(files,null,2);

        if(err){
         console.log('parse error: ' + err);
         } else {
         console.log('parse files: ' + filesTmp);
         var inputFile = files.inputFile[0];
         var uploadedPath = inputFile.path;
           var dstPath = './public/files/' + inputFile.originalFilename;
           //重命名为真实文件名
            console.log(inputFile);
           fs.rename(uploadedPath, dstPath, function(err) {
                   if(err){
                         console.log('rename error: ' + err);
                      } else {
                          console.log('rename ok');
                        }
                  });
            }
        //响应消息 可跳转 可返回
       res.writeHead(200, {'content-type': 'text/plain;charset=utf-8'});
        res.write('received upload:\n\n');
         res.end(util.inspect({fields: fields, files: filesTmp}));
        });
   });
module.exports=Post;