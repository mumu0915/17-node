var http = require("http");
var url = require("url");

// var router = require("./router");
// 只想要里面的route方法 只是引入了一个方法函数


// route只是个形参 是一个函数
function start(route) {
    // 创建服务器
    http.createServer(function(request, response) {
        // console.log(url.parse(request.url));
        // console.log(url.parse(request.url).pathname);
        var pathname = url.parse(request.url).pathname;
        // console.log(pathname);
        // 怎么处理路由 应该有router.js route方法里面写
        route(pathname, response)

        // 服务器响应编码状态码预期响应格式
        // response.writeHead(200, { "Content-Type": "text/plain" });
        // 实际响应内容
        // response.end("Hello World");
    }).listen(8080);

    console.log("Server running at http://127.0.0.1:8080/");
}

exports.start = start
// 这是一个模块

// 使用依赖注入