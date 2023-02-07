const testNum = [1, 2, 3, 4];

function sumFor(numArr) {
  let sum = 0;
  for (const num of numArr) {
    sum += num;
  }
  return sum;
}
console.log(sumFor(testNum));
function sumWhile(numArr) {
  let sum = 0;
  let i = 0;
  while (i < numArr.length) {
    sum += numArr[i];
    i++;
  }
  return sum;
}
console.log(sumWhile(testNum));
function sumRecursion(numArr) {
  if (numArr.length === 0) {
    return 0;
  }
  return numArr[0] + sumRecursion(numArr.slice(1, numArr.length));
}
console.log(sumRecursion(testNum));
function sumTheSimpleWay(numArr) {
  return _.reduce(numArr, function (memo, num) { return memo + num; }, 0);
}
console.log(sumTheSimpleWay(testNum));
