var http = require("http");
// 引入url模块
var url = require("url");

// createServer 创建服务器
http.createServer(function(request, response) {
    console.log(request);
    // IncomingMessage类

    // 如果是 访问favicon 返回404
    if (request.url == "/favicon.ico") {
        response.writeHead(404, { "Content-Type": "text/plain" });
        response.end();
        return;
    }

    console.log(request.url);
    console.log(url.parse(request.url));
    // 访问其他链接正常走
    response.writeHead(200, { "Content-Type": "text/plain" });
    response.end("Hello World");
}).listen(8080);

console.log("Server running at http://127.0.0.1:8080/");

// url
// http://localhost:8080/about
// http://localhost:8080/user
// http://localhost:8080/user/profile
// http://localhost:8080/user?name=nick&age=17
// http://localhost:8080/user/profile?name=nick&age=17

// 处理url 需要使用 url模块

// https://github.com/FindIndex/17-node

{
    protocol: null;
    slashes: null;
    auth: null;
    host: null;
    port: null;
    hostname: null;
    hash: null;
    search: "?name=nick&age=17";
    query: "name=nick&age=17";
    pathname: "/user/profile";
    path: "/user/profile?name=nick&age=17";
    href: "/user/profile?name=nick&age=17";
}
