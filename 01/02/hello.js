var hello = require("./world");
// console.table(hello)
console.log(hello);
hello.greet();

var http = require("http");
// console.log(http);

var express = require("express");
// console.log(express);

console.log("hello.js里面", __filename);
// 文件路径
console.log("hello.js里面", __dirname);
// 目录路径
