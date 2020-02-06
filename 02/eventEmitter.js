// 引入 events 模块
var events  = require('events')
console.log(events);

// 创建 eventEmitter 对象
var eventEmitter = new events.EventEmitter()
console.log(eventEmitter);


// 绑定事件及事件的处理程序
eventEmitter.on('xxx', function () {
    console.log('xxx事件被触发');
})

setTimeout(() => {
    // 触发事件
    eventEmitter.emit('xxx')
}, 30000);

var fs = require('fs')
console.log(fs);

// nodejs开发调试工具
// 谷歌浏览器 chrome://inspect
// 终端 node file ->  node --inspect file
// 终端 supervisor file ->  supervisor --inspect file
