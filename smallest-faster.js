function findNumber(values) {
  let result = [];

  for (let i = 0; i < values.length; ++i) {
    if (0 <= values[i]) {
      result[values[i]] = true;
    }
  }
  console.log(result.length);

  for (let i = 1; i <= result.length; ++i) {
    if (undefined === result[i]) {
      return i;
    }
  }

  return 1
}


let arrOne = [-5, -100, 1, 2, 3, 9, 2, 4, 10, 100, -900];
console.log(findNumber([1,2,3,4,5]));
console.log(findNumber(arrOne));
