var buf = Buffer.from('runoob', 'ascii');
var buf1 = Buffer.from('0', 'ascii'); //30
var buf1 = Buffer.from('1', 'ascii'); //31
var buf1 = Buffer.from('a', 'ascii'); //61

// 输出 72756e6f6f62
console.log(buf.toString('hex'));

// 输出 cnVub29i
console.log(buf.toString('base64'));


// 创建一个长度为 10、且用 0 填充的 Buffer。
var buf1 = Buffer.alloc(10);

// 写入buffer 返回写入长度
buf1.write('abc') 

// 写入buffer 返回写入长度 buf1的长度只有10个 后面888不会出来
buf1.write('0123456789888')

// buffer -》 string 默认编码utf8
buf1.toString()
buf1.toString('utf8')
buf1.toString('utf8',3)
buf1.toString('utf8',3,5)

var buf2 = Buffer.alloc(10)
for (var i = 0; i < buf2.length; i++) {
    buf2[i] = i
}


buf = Buffer.from([0x1, 0x2, 0x3, 0x4, 0x5])
// [0x1, 0x2, 0x3, 0x4, 0x5] buffer数组
JSON.stringify(buf)

buf1 = Buffer.from('abc')
buf2 = Buffer.from('xyz')
buf3 = Buffer.concat([buf1,buf2])

// 读取buf3 截取
buf3.toString('utf8',1)
// 截取buffer
buf4 = buf3.slice(1)