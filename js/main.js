//import { Sub } from "./port";

//1.  variables - var and let create variables that can be reassigned another value. E6 feature, const creates "constant" variables that cannot be reassigned another value. var - Global scope or function scope. let & const - block scope
let a = "vishnu";
var b = "venkat";
const c = "andal";
if (true) {
  let e = "ranjitha";
  let a = "Goat";
  var b = "Cow";
  const f = "rangadass";
  const c = "Dog";
  console.log(a);
  console.log(b);
  console.log(c);
}
console.log(a);
console.log(b);
console.log(c);
// console.log(f); output : f is not defined
// console.log(e); output: e is not defined
if (true) {
  var d = "siddhu";
  console.log(b);
}
console.log(d);

//2. Different ways to create and access functions

//i. Named functions - Named function is the function that we it in the code and then call it whenever we need it by. It is useful if we need to call a function many times to pass a different values to it or run it several times.

function isEven(num){
    return num %2 ==0;
}
console.log(isEven(2));

//ii. Anonymous function - it don't have names. They need to be tried to something : variavle or an event to run.

const add = function(a,b){
    return a+b;
}
console.log(add(10,20));

//iii. Arrow function - ES6 feature, this provides a shirthand syntax for defining functions. Here we do not use the "function" keyword and use the arrow symbol.

const sub = (a,b) => {
    return a-b;
}

console.log(sub(30,20));

//iv. Immediately invoked function expression(IIFE) - IIFE are functions that are executed immediately upon the definition. They help to create private scopes and module patterns, preventing variables from leaking into the global scope.

(function(){
    console.log("Welcome to IIFE");   
}())

//v. Higher order functions - Function that accepts other function as arguments or return functions. Some examples of higher order functions are map(), filter(),reduce().

const num = [1,2,3,4,5];

const doubledNum = num.map(function (n){
    return n*2;
})

console.log(doubledNum);

//vi. Callback functions - Functions passed as arguments to other functions, commonly used in asynchrounous operations.

function greet(name,callback){
    console.log("hi " + name);
    callback();
}

function uCanCallMe(){
    console.log("u called me?");
}

greet('Vishnu', uCanCallMe)

//vii. Generator functions - Functions that can be paused and resumed, using funtion* syntax and yield keyword.

function* generateSequence() {
    yield "vishnu";
    yield 24;
    yield "3";
}

const seqfunction =generateSequence();
console.log(seqfunction.next().value);
console.log(seqfunction.next().value);
console.log(seqfunction.next().value);

//viii. Async Functions - functions that return a promise and use await to pause execution until the promise is resolved.

async function fetchData() {
    let data = await fetch('https://jsonplaceholder.typicode.com/posts/2')
    data = await data.json();
    return data
}

fetchData().then(data =>{
    console.log(data);
}
)

//3. Es6 features
//i. Template literals - String literal allowing embedded expressions.

let laststName = 'Rangadass';
console.log(`Vishnu ${laststName}`);

//ii. Default parameter - parametres in function can have the dwefault values

function nameCalling(name = 'Vishnu'){
    return(`${name} Rangadass`);
}

console.log(nameCalling());
console.log(nameCalling('Venkatesan'));

//iii. Rest parameters - functions can accept an indefinite number of arguments as an array

const numbersArr = [1,2,3,4,5]

function sum(...numbers){
    return numbers.reduce((acc,val)=>acc+val,0)
}
console.log(sum(num));

//iv. Spread operator - Allows iterables to be expanded into single.

const mul = (a,b,c,d,e) => a*b*c*d*e
console.log(mul(...numbersArr));

//v. Destructuring - easily extract values from arrays or objects into variables.

const person = {
    fName: 'Vishnu',
    age :24,
    Address : 'Rdp'
}
console.log(person.fName);

const {fName,age} = person;
console.log(fName, age);
//console.log(Address); output :Addess is not defined, because we didn't destructure the object.

const person2 = ['Venkat', 30,'Chennai'];

const [sName,,address] = person2;

console.log(sName,address);
//console.log(); age is not defined, because we didn't destructure the array.

//v. modules - allows splitting code into multiple files and importing/exporting functionalities. I have import the file in the top level.

console.log(sum(13,7));

//v. promises - Promise is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value. Promises are commonly used to handle asynchronous tasks like fetching data from an API, reading files, or working with timers.

let dev= false

let promise = new Promise((resolve,reject)=>{
    if(dev) resolve ("he is dev")
        else reject("he is not a dev")
})

promise.then((sucess)=>{
    console.log(sucess);
}).catch((error)=>{
    console.log(error);
}).finally(()=>{
    console.log("completed");
    
})


//4. Exception handling

async function fetchdata() {
    try{
        let response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
        if(!response.ok){
            throw new Error("network failed");
        } 
        let user =await response.json();
        console.log(user);
    }catch(error){
        console.error("failed :", error);
    } finally{
        console.log("fetcching completed");
        
    }
    
}
//5. Fetch() method 

fetch("https://jsonplaceholder.typicode.com/posts/3").then((response)=>{
    response.json();
}).then((data)=>{
    console.log(data,"emptyfetch");
}).catch((error)=>{
    console.error(error);
    
})
//6. DOM