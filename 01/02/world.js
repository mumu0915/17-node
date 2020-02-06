exports.world = 111
exports.name = 'nick'
exports.greet = function () {
    console.log('hello there', __filename)
    // 模块里面 返回的是模块路径
    console.log('hello there', __dirname)
    // 模块里面 返回的是模块目录

}
console.log('word.js', __filename)
var x = 10