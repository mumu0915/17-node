var fs = require('fs');

fs.readFile('./readme.tx', function (err, data) {
    if (err) {
        // console.log({err});
        console.log(err.stack);

        return
    }
    console.log(data.toString());
})

console.log('程序执行完毕');

// 异步代码 非阻塞代码
// 哪怕时间再短 定时器里面的0 也要等到文件里面所有同步走完


setTimeout(() => {
    
}, 10000);