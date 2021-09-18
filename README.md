# ArrayHas
判断Array对象中是否存在某个参数，解决嵌套的对象无法判断的问题。

```JavaScript
// npm install fast-deep-equal

const equal = require('fast-deep-equal/es6');
Array.prototype.has = function(val){for(let i of this){if(equal(i, val)){return true;}}return false;};

// 示例
let a = [ { name: 'racyily', age: 22 }, { name: 'susan', age: 18 } ];
let b = {name: 'racyily', age: 22};

console.info(a.has(b)); // true
console.info(a.has({ name: 'susan', age: 10 })); // false
console.info(a.has("c")); // false
```
