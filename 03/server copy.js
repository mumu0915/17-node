// 引入模块
var http = require("http");

// http.createServer(function (request, response) {
//     response.writeHead(200, { "Content-Type": "text/plain" });
//     response.end("hello world");
// }).listen(8888);

// 请求处理方式 请求对象 响应对象
function onRequest(request, response) {
    response.writeHead(200, { "Content-Type": "text/plain" });
    response.end("hello world");
}

// 返回新建的 http.Server 实例。
var server = http.createServer(onRequest);

// 启动 HTTP 服务器监听连接
server.listen(8888);
