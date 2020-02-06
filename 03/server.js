// 引入模块
var http = require("http");

// 请求处理方式 请求对象 响应对象
function onRequest(request, response) {
    // 打印请求对象
    // console.log(request);
    
    response.writeHead(200, { "Content-Type": "text/plain" });
    setTimeout(() => {
        response.end("hello world");
    }, 30);
}

// 返回新建的 http.Server 实例。
var server = http.createServer(onRequest)

// 设置套接字的超时值
// server.setTimeout(1000)
// ajax轮询 -> 长时链接 -> websocket

// 启动 HTTP 服务器监听连接
server.listen(8888, function () {
    console.log("====Server running at http://127.0.0.1:8888/");
});

// 十秒之后关闭服务器
setTimeout(() => {
    server.close(function () {
        console.log('服务器关闭');
    })
}, 10000);

