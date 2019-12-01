var fs = require('fs');

// 使用readdir 读取文件列表
fs.readdir('./','utf-8',function(err,data){
    console.log(data)
})