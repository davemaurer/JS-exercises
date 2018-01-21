var arr = [1, 2, 3];
var arrOne = [-5, -1, 0];
var arrTwo = [5];
var arrThree = [1];

function solution(nums) {
  var sorted = nums.filter(num = > num > 0
).
  sort();
  if (sorted.length === 0 || sorted[0] !== 1) {
    return 1;
  }
  for (var num of sorted) {
    var n = num - 1;
    if (n > 0 && !sorted.includes(n)) {
      return n
    } else {

    }
  }
}

console.log(solution(arr));
console.log('should be 2');

console.log(solution(arrOne));
console.log('should be 1');

console.log(solution(arrTwo));
console.log('should be 4');

console.log(solution(arrThree));
console.log('should be 2');
