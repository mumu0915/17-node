// fs.readFile(path[, options], callback)

// 执行异步操作的函数将回调函数作为最后一个参数， 回调函数接收错误对象作为第一个参数。
var fs = require('fs')

// fs.readFile(path,options,callback)

// fs.readFile('./readme.tx', function (err, data) {
fs.readFile('./readme.txt', function (err, data) {
    if (err) {
        console.log(err)
        return
    }
    
    console.log(data.toString('utf8'));
})

console.log('程序执行完毕');

// 为了调试 让程序执行速度慢一点 node --inspect readFile.js
setTimeout(() => {
    
}, 10000);





