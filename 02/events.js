// 引入events模块
var events = require('events');

// 实例化eventEmitter
var eventEmitter = new events.EventEmitter();

// 事件处理函数
var connectionHandler = function () {
    console.log('连接成功');
    eventEmitter.emit('data_received');
}
var receivedHandler = function () {
    console.log('接收到数据');
}

// 监听事件
eventEmitter.on('data_received', receivedHandler)
eventEmitter.on('connection', connectionHandler)


console.log('程序开始');
// 触发事件
eventEmitter.emit('connection');

console.log('程序执行完成');
