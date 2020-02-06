var fs = require("fs");

function myReadFile (path) {
    var p1 = new Promise(function(resolve, reject) {
        fs.readFile(path, function(err, data) {
            // 如果出错
            if (err) {
                reject(err);
                return;
            }
            // 成功之后要干什么
            resolve(data);
        });
    });
    return p1
}


// 以同步方式写异步
myReadFile('./readme.txt').then(function(data) {
    console.log("文件读取成功", data.toString());
}).catch(function(err) {
    console.log(err);
});

myReadFile('./readFile.js').then(function(data) {
    console.log("文件读取成功", data.toString());
}).catch(function(err) {
    console.log(err);
});


// 
// setTimeout(() => {
    
// }, 100000);
