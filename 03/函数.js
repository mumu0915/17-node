// 一个函数可以作为另一个函数的参数

// var say = function(word) {
//     console.log(word);
// };

// var execute = function(someFunction, value) {
//     someFunction(value);
// };

// execute(say, "Hello");

// 把第二个参数当成第一个参数函数 的 参数
var execute = function(someFunction, value) {
    someFunction(value);
};

execute(function(word) {
    console.log(word);
}, "Hello");


