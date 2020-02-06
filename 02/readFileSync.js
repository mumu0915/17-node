// fs.readFileSync(path[, options])

var fs = require('fs')
// console.log(fs);


// 同步方式date保存读取到的内容
var data = fs.readFileSync('./readme.txt')

// 文件是二进制保存的 data是buffer
console.log(data.toString())
// buffer-》string

console.log('程序执行完毕');
