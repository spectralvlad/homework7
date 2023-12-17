Приклад 1

function memoize(defaultValue) {
  let memoizedData = defaultValue;

  function getMemData() {
    return memoizedData;
  }

  function setMemData(newData) {
    memoizedData = newData;
  }

  return [getMemData, setMemData];
}

// Приклад використання:
const memData = memoize();
const getMemData = memData[0];
const setMemData = memData[1];

console.log(getMemData()); // поверне undefined
setMemData(3);
console.log(getMemData()); // 3
setMemData("some string");
setMemData({ a: "b" });
console.log(getMemData()); // поверне { a: 'b' }




Приклад 2

function memoize(defaultValue) {
  let memoizedData = Array.isArray(defaultValue) ? [...defaultValue] : defaultValue;

  function getMemData() {
    return memoizedData;
  }

  function setMemData(newData) {
    memoizedData = newData;
  }

  return [getMemData, setMemData];
}

// Приклад використання:
const memData = memoize([1, 2, 3]);
const getMemData = memData[0];
const setMemData = memData[1];

console.log(getMemData()); // поверне [1, 2, 3]
setMemData('test');
console.log(getMemData()); // поверне 'test'
