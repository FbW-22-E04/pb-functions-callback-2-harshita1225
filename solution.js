//callback

function squareNum(number) {
  return number ** 2;
}

console.log(squareNum(5));
console.log(`--------------------------`);
function square(arr, cb) {
  return arr.map((item) => cb(item));
}

console.log(square([1, 2, 3, 4, 5, 6], squareNum));
