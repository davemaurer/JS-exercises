let arr = [1, 2, 3];
let arrOne = [-5, -1, 0];
let arrTwo = [5];
let arrThree = [1];
let arrFour = [1, 2, 3, 8, 9];

function solution(nums) {
  if (nums.length === 0 || nums[0] > 1) {
    return 1
  }
  let smallest = 1;
  nums.forEach(function(num) {
    if (num > 0 && )
  });
}

console.log(solution(arr));
console.log('should be 4');

console.log(solution(arrOne));
console.log('should be 1');

console.log(solution(arrTwo));
console.log('should be 1');

console.log(solution(arrThree));
console.log('should be 2');

console.log(solution(arrFour));
console.log('should be 4');
