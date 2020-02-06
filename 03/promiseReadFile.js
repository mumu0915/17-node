var fs = require("fs");

var p1 = new Promise(function(resolve, reject) {
    fs.readFile("./readme.txt", function(err, data) {
        // 如果出错
        if (err) {
            reject(err);
            return;
        }
        // 成功之后要干什么
        resolve(data);
    });
});

// 以同步方式写异步
p1.then(function(data) {
    console.log("文件读取成功", data.toString());
}).catch(function(err) {
    console.log("文件读取失败", err);
});
