// 引入http核心模块
var http = require('http');
// 引入读文件模块
var fs = require('fs');
// 创建一个服务
var server = http.createServer();

// 添加服务器监听
server.on('request', function (request, response) {
  console.log(request.url);
  if (request.url === '/') {
    fs.readFile('./index.html', function (err, data) {
      response.end(data);
    })
  } else if (request.url === '/file_list') {
    fs.readdir('./', 'utf-8', function (err, data) {
      response.end(JSON.stringify(data));
    })
  } else {
    fs.readFile('.' + request.url, function (err, data) {
      response.end(data);
    })
  }
})
// 启动监听
server.listen(8085, function () {
  console.log('请访问localhost:8085')
})  