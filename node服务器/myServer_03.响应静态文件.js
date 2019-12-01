// 引入http核心模块
var http = require('http');
// 引入读文件模块
var fs = require('fs');
// 创建一个服务
var server = http.createServer();

// 添加服务器监听
server.on('request', function (res, rs) {
    var urls = res.url;
    if (urls === '/') {
        // 设置请求头
        rs.setHeader('Content-type', 'text/html;charset=utf-8');
        fs.readFile('./index.html', 'utf-8', function (err, data) {
            rs.end(data);
        })
    } else {
        // 响应一切HTML需要的静态资源
        fs.readFile('.' + urls, function (err, data) {
            rs.end(data);
        });
    }


})
// 启动监听
server.listen(8085, function () {
    console.log('请访问localhost:8085')
}) 