//1. Unique elements in array

function removeDuplicates(arr) {
  return Array.from(new Set(arr));
}
const array = [1, 2, 3, 1, 4, 2, 5, 3, 5, 6, 4, 7, 8, 9, 9, 0, 1, 2, 4];
const newArray = removeDuplicates(array);
console.log(newArray);

//2. Palindrome or not

function pallindrome(str) {
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== str[str.length - i - 1]) {
      return "Not a Pallidrome";
    }
    return "Pallindrome";
  }
}
console.log(pallindrome("madam"));
console.log(pallindrome("hello"));

//3. Find the logest words in the given sentence

function findLongestWord(sen) {
  let wordsArray = sen.split(" ");
  let longestWord = "";
  for (let i = 0; i < wordsArray.length; i++) {
    if (wordsArray[i].length > longestWord.length) {
      longestWord = wordsArray[i];
    }
  }
  console.log(longestWord);
}
findLongestWord("Hi I am the javascript developer");

//4. Reverse a string without using built-in function

function reverseString(str) {
  let reverse = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reverse += str[i];
  }
  console.log(reverse);
}
reverseString("vishnu");

//5. Find the consecutive number in an array

function findConsecutiveNum(arr) {
  let maxCount = 0;
  let consCount = 0;
  for (let i = 0; i <= arr.length - 1; i++) {
    if (arr[i] === 1) {
      consCount += 1;
      maxCount = Math.max(consCount, maxCount);
    } else {
      consCount = 0;
    }
  }
  console.log(maxCount);
}
findConsecutiveNum([1, 2, 3, 4, 4, 5, 1, 1, 4, 6, 6, 7, 7, 7, 8, 9, 1]);

//6. Factorial of a given number

function factorialNum(num) {
  if (num == 0 || num === 1) {
    return 1;
  } else {
    return num * factorialNum(num - 1);
  }
}
console.log(factorialNum(5));

//7. Find the maximum number in the given array

function maximumNum(arr) {
  if (arr.length == 0) {
    return "Empty array";
  }
  let maxarr = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > maxarr) {
      maxarr = arr[i];
    }
  }
  return maxarr;
}
console.log(maximumNum([1, 2, -8]));

//8.Takes an array of numbers and returns a new array with only the even numbers.

function findEvenNumbers(arr) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      result.push(arr[i]);
    }
  }
  return result;
}

console.log(findEvenNumbers([1, 2, 3, 4, 5, 6, 7, 8, -8, 19, 9, 10, 12]));

//9.Check if given number is prime or not

function isPrime(num) {
  if (num <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
}
console.log(isPrime(1));
console.log(isPrime(9));
console.log(isPrime(13));

//10.Fibonacci series

function fibonacci(numTerms) {
  let series = [0, 1];
  for (let i = 2; i <= numTerms; i++) {
    nextTerm = series[i - 1] + series[i - 2];
    series.push(nextTerm);
  }
  return series;
}
console.log(fibonacci(10));

//11.Swap of two variables

function swapOfTwoVar(a, b) {
  let c = a;
  a = b;
  b = a;
  console.log(b, c);
}
swapOfTwoVar(10, 20);

//12.Swap of two variables without using 3rd variable

function swapOfTwoVarWoThirdVar(a, b) {
  a = a + b;
  b = a - b;
  a = a - b;
  console.log(a, b);
}
swapOfTwoVarWoThirdVar(100, 200);

//13.Pattern-upper left triangle

function upperLeftPattern(n) {
  for (let i = 1; i <= n; i++) {
    let star = "* ";
    console.log(star.repeat(i));
  }
}
upperLeftPattern(5);

//14.Pattern-upper right triangle

function upperRightPattern(n) {
  for (let i = 1; i <= n; i++) {
    let star = "* ";
    let space = "  ";
    console.log(space.repeat(n - i) + star.repeat(i));
  }
}
upperRightPattern(5);

//15.Pattern-fulltriangle

function fullTriangle(n) {
  for (let i = 1; i <= n; i++) {
    let star = "* ";
    let space = " ";
    console.log(space.repeat(n - i) + star.repeat(i));
  }
}
fullTriangle(5);

//16.Pattern-lower-left-triangle

function lowerLefttriangle(n) {
  for (let i = n; i >= 1; i--) {
    let star = "* ";
    console.log(star.repeat(i));
  }
}
lowerLefttriangle(5);

//17.Pattern-lower-right-triangle

function lowerRightTriangle(n) {
  for (let i = n; i >= 1; i--) {
    let star = "* ";
    let space = "  ";
    console.log(space.repeat(n - i) + star.repeat(i));
  }
}
lowerRightTriangle(5);

//18.Pattern-reverse-full-triangle

function reverseFullTriangle(n) {
  for (let i = n; i >= 1; i--) {
    let star = "* ";
    let space = " ";
    console.log(space.repeat(n - i) + star.repeat(i));
  }
}
reverseFullTriangle(5);

//19.Alphabets priting A-Z & a-z using loops

function alphaLoowerUpperPrint() {
  let i;
  console.log("Alphabets form (A-Z) using for loop :");
  for (i = 65; i <= 90; i++) {
    console.log(String.fromCharCode(i));
  }
  console.log("Alphabets from (a-z) using for loop :");
  for (i = 97; i <= 122; i++) {
    console.log(String.fromCharCode(i));
  }
}

alphaLoowerUpperPrint();

//20. Print numbers 0-n using recursion

function recursionPrintNum(n, currentValue) {
  if (currentValue > n) {
    return;
  }
  console.log(currentValue);
  recursionPrintNum(n, currentValue + 1);
}
recursionPrintNum(10, 0);

//21. Print numbers n-1 using recursion

function reverseRecursionPrintNum(n) {
  if (n == 0) {
    return;
  }
  console.log(n);
  reverseRecursionPrintNum(n - 1);
}
reverseRecursionPrintNum(10);

//22. JS Closure

function outerFunction() {
  let word = "Hello World";
  function innerFunction() {
    console.log(word);
  }
  return innerFunction();
}
outerFunction();

//23. Shitft the zero values to right side and non-zero valus to the left in an array.

const zeroNonZeroValues = (values) => {
  let zeroValues = [];
  let nonZeroValues = [];
  for (let i = 0; i < values.length; i++) {
    if (values[i] !== 0) {
      nonZeroValues.push(values[i]);
    } else {
      zeroValues.push(values[i]);
    }
  }
  let result = [...nonZeroValues, ...zeroValues];
  console.log(result);
};
zeroNonZeroValues([1, 2, 3, 4, 5, 0, 0, 4, 5, 6, 0]);

//23. Shitft the zero values to right side and non-zero valus to the left in an array using filter method.

function zeroNonZeroValuesUsingMethods(values) {
  let zeroValues = values.filter((value) => value === 0);
  let nonZeroValues = values.filter((value) => value !== 0);
  let result = [...nonZeroValues, ...zeroValues];
  console.log(result);
}
zeroNonZeroValuesUsingMethods([1, 2, 3, 4, 5, 0, 0, 4, 5, 6, 0]);

//24. Random string generator

const randomString = Math.random().toString(16).slice(4);
console.log(randomString);

//25. Extract domain and user id in email

const mail = "vishnu.rangadass1@wipro.com";
const domainName = mail.substring(mail.indexOf("@") + 1);
const domainId = mail.slice(mail.indexOf("@") + 1);
const userId = mail.substring(mail.charAt(0), mail.indexOf("@"));
const userName = mail.slice(mail.charAt(0), mail.lastIndexOf("@"));

console.log(domainName);
console.log(userName);
console.log(domainId);
console.log(userId);

//26. Check if it is an array or not

const arr1 = "not an array";
const arr2 = ["vishnu", 24, "Chennai"];
const isArray = (arr) => Array.isArray(arr);

console.log(isArray(arr1));
console.log(isArray(arr2));

//27 . Redirect the user

const redirect = (url) => (location.href = url);

console.log(redirect("www.google.com"));

//28. To check if element is an active or not

const inputElement = document.createElement("input").focus();
const isFocus = inputElement == document.activeElement;
console.log(isFocus);

//29. Check if array is an empty or not

const arr3 = [];
const arr4 = ["vishnu", "venkat", "siddhu"];

const isEmpty = (arr) => !(Array.isArray(arr) && arr.length > 0);
console.log(isEmpty(arr3));
console.log(isEmpty(arr4));

//30. Check each digit, if it is a prime number then stored the same value in an array else replace with '0',

const primeStore = (num) => {
  const numStr = num.toString();
  const splitArr = numStr.split("");
  const numArr = splitArr.map(Number);
  const storeArr = [];

  for (let i = 0; i < numArr.length; i++) {
    let isPrime = true;
    
    if (numArr[i] <= 1) {
      isPrime = false;
    } else {
      for (let j = 2; j <= Math.sqrt(numArr[i]); j++) {
        if (numArr[i] % j === 0) {
          isPrime = false;
          break;
        }
      }
    }

    storeArr.push(isPrime ? numArr[i] : 0);
  }
  
  return storeArr;
};

console.log(primeStore(9));
console.log(primeStore(2357));
console.log(primeStore(4106));
console.log(primeStore(1234567));


function showAddress(obj){
  return(`Address : ${obj.street}, ${obj.city}, ${obj.postCode}`);
}
function showAdd2(objj){
  for(let key in objj){
    console.log(key, objj[key]);
  }
}
showAdd2({street:"Perumal kovil street", city:"Kallkurichi", postCode: 605801})
console.log(showAddress({street:"Perumal kovil street", city:"Kallkurichi", postCode: 605801}))