// 引入http核心模块
var http = require('http');
// 引入读文件模块
var fs = require('fs');
// 创建一个服务
var server = http.createServer();

// 添加服务器监听
server.on('request',function(res,rs){
    rs.write('nihao');
    rs.end();
})
// 启动监听
server.listen(8085,function(){
    console.log('请访问localhost:8085')
})  