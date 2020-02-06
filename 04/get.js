var http = require("http");
var url = require("url");
var querystring = require("querystring");
var fs = require("fs");

http.createServer(function(request, response) {
    if (request.url !== "/favicon.ico") {
        // console.log(request);
        // console.log(request.url);

        // console.log(url.parse(request.url));
        var pathname = url.parse(request.url).pathname;

        // console.log(querystring.parse(url.parse(request.url).query));
        var query = querystring.parse(url.parse(request.url).query);

        response.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });

        // get.html
        if (pathname == "/get.html") {
            fs.readFile("./get.html", function(err, data) {
                response.end(data);
            });
        }

        // getuser
        if (pathname == "/getuser") {
            console.log(query);
            fs.writeFile(
                "./userlist.txt",
                query.username + " " + query.age + '\n',
                {
                    flag: "a"
                },
                function(err) {
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
    <h1>订单提交成功</h1>
    <script>
        setTimeout(() => {
            history.back()
        }, 3000);
    </script>
</body>
</html>
                    `);
                }
            );
        }
        // response.end('个人主页：'+ query.name);
    }
}).listen(8080);

console.log("Server running at http://127.0.0.1:8080/");
