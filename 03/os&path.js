var os = require("os");

// console.log("CPU", os.cpus());
// console.log("总内存", os.totalmem());
// console.log("空闲内存", os.freemem());
// console.log("系统时间", os.uptime());
// console.log("系统负载", os.loadavg());
console.log("系统平台", os.platform());

var path = require("path");

// console.log(__filename);
console.log(__dirname);
console.log(__dirname + "/模块");
// 不准确 跨平台 win \  Linux /

console.log(path.join(__dirname, "模块"));

console.log(path.resolve(__dirname, "static_files/png/", "./01"));
// D:\GZ1962\17-node\04\static_files/png/01

console.log(path.resolve(__dirname, "static_files/png/", "../01"));
// D:\GZ1962\17-node\04\static_files/01

console.log('====================================');
console.log(__filename);
console.log(path.basename(__filename));
console.log(path.extname(__filename));
console.log(path.parse(__filename));
console.log('====================================');


