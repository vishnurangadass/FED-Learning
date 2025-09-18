//1. odd or even
function iseven(n) {
  if (n % 2 == 0) {
    return n + " is even number";
  } else {
    return n + " is odd number";
  }
}

console.log(iseven(1));

//2. factorial
function factNum(n) {
  if (n < 0) return "Factorial number is not available for negative numbers";
  let fact = 1;
  for (let i = 1; i <= n; i++) {
    fact = fact * i;
  }
  return fact;
}
console.log(factNum(0));

//3. Swap of two variables with the use of third variable

function swapoftwoVar(a, b) {
  let c = a;
  a = b;
  b = c;

  return [a, b];
}
console.log(swapoftwoVar(10, 20));

//4. Swap of two variables without the use of third variable, using add and subtract
function swapusingAddSub() {
  let a = 5,
    b = 10;
  a = a + b;
  b = a - b;
  a = a - b;
  console.log(a, b);
}
swapusingAddSub();
//5. Swap of two variables without the use of third variable, using mul and div
function swapusingMulDiv() {
  let a = 5,
    b = 10;
  a = a * b;
  b = a / b;
  a = a / b;
  console.log(a, b);
}
swapusingMulDiv();
//6. Swap of two variables without the use of third variable, X-or
function swapusingXor() {
  let a = 5,
    b = 10;
  a = a ^ b;
  b = a ^ b;
  a = a ^ b;
  console.log(a, b);
}
swapusingXor();
//7. Swap of two variables without the use of third variable, using destructuring
function swapusingDestructure() {
  let a = 5,
    b = 10;
  [a, b] = [b, a];
  console.log([a, b]);
}
swapusingDestructure();

//8. isPrime or not

function isPrime(n) {
  if (n <= 1) return n + " is not a prime number";
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i == 0) {
      return n + " is not a prime number";
    }
  }
  return n + " is a prime number";
}

console.log(isPrime(1));

//9. Unique elements in an array

function uniqueElements(arr) {
  return Array.from(new Set(arr));
}
const arr = [1, 1, 3, 2, 2, 3, 4, 5, 7, 7, 6, 4];
console.log(uniqueElements(arr));

//10. Palindrome or not

function isPalindrome(str) {
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== str[str.length - i - 1]) {
      return str + " is not a pallindrome";
    }
    return str + " is a pallindrome";
  }
}
console.log(isPalindrome("madam"));

//11.Find the largest word in the given sentences

function largestWord(sen) {
  let words = sen.split(" ");
  let longestWord = "";
  for (let i = 0; i < words.length; i++) {
    if (words[i].length > longestWord.length) {
      longestWord = words[i];
    }
  }
  return longestWord;
}
console.log(largestWord("I am a developer"));

//12. Reverse a string without using built-in methods

function reversestring(str) {
  let reverseStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reverseStr += str[i];
  }
  return reverseStr;
}
console.log(reversestring("vishu rRagadass"));

//13. Find the maximum number in an array

function maxNum(arr) {
  if (arr.length == 0) {
    return "Empty array";
  }
  let maxArr = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > maxArr) {
      maxArr = arr[i];
    }
  }
  return maxArr;
}

console.log(maxNum([1, 2, 33, -43]));

//14. Take a even number from an array and return the even numbers in a new array

function evenNumArr(arr) {
  let evenArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      evenArr.push(arr[i]);
    }
  }
  return evenArr;
}

console.log(evenNumArr([1, 2, 3, 4, 5, 6]));

//15. Fibonacci series

function fibonacci(num) {
  let series = [0, 1];
  for (let i = 2; i <= num; i++) {
    let nextTerm = series[i - 1] + series[i - 2];
    series.push(nextTerm);
  }
  return series;
}
console.log(fibonacci(10));

//16. Pattern upper left triangle

function upperLeft(n) {
  for (let i = 1; i <= n; i++) {
    let star = "* ";
    console.log(star.repeat(i));
  }
}
upperLeft(5);

//17. Pattern upper right triangle

function upperRight(n) {
  for (let i = 1; i <= n; i++) {
    let star = "* ";
    let space = "  ";
    console.log(space.repeat(n - i) + star.repeat(i));
  }
}
upperRight(5);

//18. Pattern full triangle

function fullTriangle(n) {
  for (let i = 1; i <= n; i++) {
    let star = "* ";
    let space = " ";
    console.log(space.repeat(n - i) + star.repeat(i));
  }
}
fullTriangle(5);

//19. Pattern lower left triangle

function lowerLeft(n) {
  for (let i = n; i >= 1; i--) {
    let star = "* ";
    console.log(star.repeat(i));
  }
}
lowerLeft(5);

//20. Pattern Lower right triangle

function lowerRight(n) {
  for (let i = n; i >= 1; i--) {
    let star = "* ";
    let space = "  ";
    console.log(space.repeat(n - i) + star.repeat(i));
  }
}
lowerRight(5);

//21. Pattern full reverse triangle

function fullReverseTriangle(n) {
  for (let i = n; i >= 1; i--) {
    let star = "* ";
    let space = " ";
    console.log(space.repeat(n - i) + star.repeat(i));
  }
}
fullReverseTriangle(5);

//22. Alphabets (A-Z) using char code

function upperAlphabets() {
  for (let i = 65; i <= 90; i++) {
    console.log(String.fromCharCode(i));
  }
}
upperAlphabets();

//23. Alphabets (a-z) using char code

function upperAlphabets() {
  for (let i = 97; i <= 122; i++) {
    console.log(String.fromCharCode(i));
  }
}
upperAlphabets();

//24. Print numbers 0-n using recursion

function recursionPrint(n, currentValue) {
  if (currentValue > n) {
    return;
  }
  console.log(currentValue);
  recursionPrint(n, currentValue + 1);
}
recursionPrint(10, 0);

//25. Print numbers n-0 using recursion

function recursionPrint(n, currentValue) {
  if (n == 0) {
    return;
  }
  console.log(n);
  recursionPrint(n - 1);
}
recursionPrint(10);

//26. Shift the zero values to the right and non zero values to the left

function shiftingValue(arr){
    let zeroValues=[]
    let nonZeroValues=[]
    for(let i=0;i<arr.length;i++){
        if(arr[i]!==0){
            nonZeroValues.push(arr[i])
        }
        else{
            zeroValues.push(arr[i])
        }
    }
    let finalArr = [...nonZeroValues,...zeroValues]
    return finalArr
}
console.log(shiftingValue([1,0,2,3,2,0,2,1,22,0,0,5]))

//26. Shift the zero values to the right and non zero values to the left using filter method

function shiftingValueFilter(arr){
    let zeroValues=arr.filter((value)=>value===0)
    let nonZeroValues=arr.filter((value)=>value!==0)
    let finalArr = [...nonZeroValues,...zeroValues]
    return finalArr
}
console.log(shiftingValueFilter([1,0,2,3,2,0,2,1,22,0,0,5]))

//27. Weekdays text program

function weedayText(weekdays, value){
if(value < weekdays.length){
  const weekText = weekdays[value];
  console.log(weekText);
}
}
const week = ["Mon","Tue","Wed","Thu","Fri","Sat","Sun"];
weedayText(week,0);