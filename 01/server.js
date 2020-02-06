// 引入http模块
var http = require("http");
// console.log(http);

// 使用http模块里面的 createServer方法创建服务器
http.createServer(function(request, response) {
    // request 请求体对象
    // response 响应体对象

    // 发送 HTTP 头部
    // HTTP 状态值: 200 : OK
    // 内容类型: text/plain
    // response.writeHead(200, { "Content-Type": "text/plain" });
    response.writeHead(200, { "Content-Type": "text/html" });
    // response.writeHead(200, { "Content-Type": "text/html; charset=UTF-8" });
    // Content-Type 浏览器预期文本格式

    // 发送响应数据 "Hello World"
    // response.end("一切反动派都是纸老虎");


    response.write("一切反动派都是纸老虎");
    response.end(`
<!DOCTYPE html>
<html lang="zh">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    一切反动派都是纸老虎。 --zhuxi mao
</body>
</html>
    `);

}).listen(8888);

console.log("Server running at http://127.0.0.1:8888/");
