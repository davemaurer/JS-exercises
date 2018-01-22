let arr = [1, 2, 3];
let arrOne = [-5, -1, 0];
let arrTwo = [5];
let arrThree = [1];
let arrFour = [1, 2, 3, 8, 9];
let arrFive = [8, 10, 4, 1, 2];

function solution(nums) {
  if (nums.length === 0) {
    return 1;
  }
  let sorted = nums.filter(num => num > 0).sort();
  let smallest = 0;
  for (let num of sorted) {
    if (num > 0 && !sorted.includes(num)) {
      if ()
    } else if (!sorted.includes(num + 1)) {
      return num + 1;
    }
  }
  return smallest;
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

console.log(solution(arrFive));
console.log('should be 3');
