var util = require('util')

// console.log(util.inherits);

var obj = {
    name:'nick',
    age: 17,
    friends: ['aa','bb',{
        spc: {
            xx:'yy'
        }
    }]
}

console.log(util.inspect(obj, true, 10))
// 默认两层
// console.log(util.inspect(obj))
console.log(obj)


util.isArray(object)
util.isRegExp(object)
util.isDate(object)
