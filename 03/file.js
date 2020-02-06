var fs = require("fs");

// 读取
fs.readFile("./readme.txt", function(err, data) {
    console.log("readme.txt读取完成", data.toString());
});

// 打开
fs.open("./readme.txt", function(err, fd) {
    console.log("readme.txt打开完成", fd);
    fs.readFile(fd, function (error, data) {
        console.log("readme.txt内容", data);

        fs.close(fd, function (err) {
            console.log('文件关闭');
            
        })
    })
});
// fd 后台打开文件的标识 -> setTimeout返回的ID


// 获取文件信息
fs.stat("./模块", function(err, stats) {
    console.log(stats);
    console.log("文件", stats.isFile());
    console.log("目录", stats.isDirectory());
});

console.log("________________");

// 写入文件
// writeFile 直接打开文件默认是 w 模式，所以如果文件存在，该方法写入的内容会覆盖旧的文件内容。
fs.writeFile("./test.txt", "你若要喜爱你自己的价值，你就得给世界创造价值。——歌德"+ '\n', function() {
    console.log("写入完成");
    fs.readFile("./test.txt", function(err, data) {
        console.log(data.toString());
        fs.writeFile(
            "./test.txt",
            "愿每次回忆，对生活都不感到负疚。——郭小川",
            {
                flag: 'a'
            },
            function(err) {
                console.log("第二次写入完成");
            }
        );
    });
});
// 流式写入 不断写入 相比 打开写入关闭->打开写入关闭->打开写入关闭....
// 打开文件 写入 写入 写入 写入 ... 关闭 更优

