function divisors(arr, div) {
  const newArray = [];
  const newArrayTwo = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % div == 0) {

      newArray.push(arr[i]);

    } else {
      newArrayTwo.push(arr[i]);
    }
  
  }
  return {
    divisible: newArray,
    nonDivisible: newArrayTwo
  };
}

const arrForDivisors = [1, 2, 3, 4, 5, 16];
const div = 4;

console.log(divisors(arrForDivisors, div));