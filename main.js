const equal = require('fast-deep-equal/es6'); // npm install fast-deep-equal
Array.prototype.has = function(val){for(let i of this){if(equal(i, val)){return true;}}return false;};

// 示例
let a = [ { name: 'racyily', age: 22 }, { name: 'susan', age: 18 } ];
let b = {name: 'racyily', age: 22};

console.info(a.has(b));
console.info(a.has({ name: 'susan', age: 18 }));
