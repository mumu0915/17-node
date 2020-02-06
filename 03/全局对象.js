var a = 10;
console.log(a);

// node 不存在window
// console.log(window.a)
console.log(global);
// console.log(global.a)
// node里面 全局变量a并没有挂载到global对象下

// global.b = 20
// console.log(global)
// 不推荐

console.log("====================================");
console.log(__filename);
// 绝对路径 [当前]文件/模块 路径

console.log(__dirname);
// 绝对路径 [当前]文件/模块 目录
console.log("====================================");

console.time();
var x = 10;
// setTimeout(() => {
//     console.timeEnd();
// }, 2000);

console.timeEnd();

