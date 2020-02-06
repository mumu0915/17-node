var fs = require('fs')
var readerStream = fs.createReadStream('./readme.txt')

readerStream.on('end', function () {
    console.log('读取完成');
})
// 事件就是一种异步 -> node.js事件驱动

// console.log(readerStream);
readerStream.on('data', function (chunk) {
    // console.log(chunk);
    console.log('====================');
    console.log(chunk.toString());
    console.log('====================');
})
// 流->分段读取 不是一次性全部读完 特大文件？
// 流 buffer 二进制 



