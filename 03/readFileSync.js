

var fs = require('fs');

var data = fs.readFileSync('./readme.txt')
console.log(data.toString());

console.log('程序执行完毕');

// 同步代码 阻塞代码
// 哪怕时间再长 也要按顺序 后面的代码必须等前面的完成