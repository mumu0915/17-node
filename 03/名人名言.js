var fs = require("fs");
// 'a' 不存在就创建 追加不会覆盖
fs.open("./名人名言.txt", 'a', function(err, fd) {
    // 如果打开错误
    if (err) {
        console.log(err);
        return
    }

    console.log(fd);
    // 设置标准输入流编码
    process.stdin.setEncoding("utf8");

    process.stdout.write('请输入一句话：')
    // 监听输入流是否准备完成
    process.stdin.on("readable", () => {
        let chunk;
        // 使用循环确保我们读取所有的可用数据。
        while ((chunk = process.stdin.read()) !== null && !chunk.includes(':q')) {
            console.log('chunk', chunk);
            
            fs.writeFile(fd, chunk, {
                flag: 'a'
            }, function (error) {
                console.log('写入完成');
            })
        }
    });
    // setTimeout(() => {
    //     process.abort()
    // }, 3000);
});
// Linux下 vim 编辑器