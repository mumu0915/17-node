var fs = require("fs");
var path  = require('path')

// 需要两个 请求路径 响应对象 想在当前文件处理响应
function route(pathname, response) {
    console.log("About to route a request for " + pathname);
    // response.end('pathname: '+ pathname)

    // pathname 有可能是 /index.html
    // 读取文件然后发送

    console.log(__dirname);
    console.log(pathname);
    
    fs.readFile(path.join(__dirname, '/public', pathname), function(err, data) {
        // 如果报错 文件找不到
        if (err) {
            // 后台终端
            console.log(err);
            
            // 前台相应
            response.writeHead(404, { "Content-Type": "text/html" });
            response.end('404');

        } else {
            response.writeHead(200, { "Content-Type": "text/html" });
            // { "Content-Type": "text/html" } html
            // { "Content-Type": "text/plain" }  css js
            // { "Content-Type": "iamge/png" }  png
            
            // 根据文件类型 给浏览器不同的 预期响应格式
            // 如果不写 浏览器自动判断
            response.end(data);
        }
    });
}

exports.route = route;
