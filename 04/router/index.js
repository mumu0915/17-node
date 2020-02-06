var server = require('./server')
var router = require('./router')
// router.route方法
// console.log(server);
// console.log(router);

server.start(router.route)
// 依赖注入
// 整个项目的入口