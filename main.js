// Приклад 1
const memData = memoize();
const getMemData = memData[0];
const setMemData = memData[1];

console.log(getMemData()); // поверне undefined
setMemData(3);
console.log(getMemData()); // 3
setMemData('some string');
setMemData({ a: 'b' });
console.log(getMemData()); // поверне { a: 'b' }

// Приклад 2
const memData2 = memoize([1, 2, 3]);
const getMemData2 = memData2[0];
const setMemData2 = memData2[1];

console.log(getMemData2()); // поверне [1, 2, 3]
setMemData2('test');
console.log(getMemData2()); // поверне 'test'
