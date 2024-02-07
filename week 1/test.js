const prompt = require("prompt-sync")();

function CustomPrompt() {
  let userInput = prompt("Enter something:");
  console.log("You entered: " + userInput);
}

function addNumber(a, b) {
  return a + b;
}

let num1 = 5;
let result = addNumber(num1, 6);
//console.log("The result is " + result);

function subtract(a, b) {
  return b - a;
}

//console.log(`substract is: ${subtract(5,4)}`)

function checkObject(obj) {
  if (obj == "obj") {
    return true;
  } else {
    return false;
  }
}

//console.log(checkObject('obj'));

function arraySet(arr, i, n) {
  if (arr[i] == n) {
    arr[i + 1] = n;
  } else {
    arr[i] = n;
  }
}

let arr = [0, 1, 2, 3];
result = arraySet(arr, 1, 0);
//console.log(arr);

function addAll(arr, arrlen) {
  let sum = 0;
  for (let i = 0; i < arrlen; i++) {
    sum += arr[i];
    console.log(sum);
  }
}

myArray = [1, 2, 3, 4, 5, 1];
//addAll(myArray,myArray.length);

function larger(a, b) {
  if (a >= b) {
    return a;
  } else {
    return b;
  }
}

//console.log(larger(7 ,6));

function compare(a, b) {
  if (a.length !== b.length) {
    return false;
  }

  for (i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) {
      return false;
    }
  }

  return true;
}

const arr1 = [1, 2, 5];
const arr2 = [1, 2, 5];

//console.log(compare(arr1, arr2));

function addToAll(arr, n) {
      
  return arr.map(element => element + n);
  
}

const arrayForaddToAll = [1, 2, 3];
const number = 1;
//console.log(addToAll(arrayForaddToAll, number));

let remembered;
function rememberThis(keepSafe) {
  remembered = keepSafe;
}
rememberThis('apple');
//console.log(remembered);

rememberThis('banana');
//console.log(remembered);

function nArray(n) {
      emptyArray = [];
      for (i=1; i<=n; i++){
        emptyArray.push(i);
      }  
      return emptyArray;
}

//console.log(nArray(5));

function addAllOpt(arr) {
  let arraySum = 0
  if (arr.length == 0) {
    return arraySum;
  }

  for (i = 0; i < arr.length; i++) {
    arraySum += arr[i];
  }
  return arraySum;
}

const arrayAddAllOpt = [1, 5];
//console.log(addAllOpt(arrayAddAllOpt));

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

const{divisible, nonDivisible} = (divisors(arrForDivisors, div));
//console.log('divisible array is :', divisible);
//console.log('nonDivisible is :', nonDivisible);

function multiples (n, m){
  let myArray = [];
  for (i=1; i<=n; i++){
    myArray.push(i*m);
  }
  return myArray;
}

console.log(multiples(3, 4))

