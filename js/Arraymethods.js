//Array Methods

const arr = [
  "Thalapathy",
  "Virumandi",
  "Ghilli",
  "Mankatha",
  "Ayan",
  "Anniyan",
  "Amaran",
  "Maharaja",
  "Kaithi",
  "Thanioruvan",
];

//1. Values() - This methods returns an iterator that provides the values for each index in the array.It takes no arguments.

const valuesArr = arr.values();

for (const actors of valuesArr) {
  console.log(actors);
}

//2. Copying an array.

const newArr = [...arr];

//3. push()- This property is used to add an element at the end of the array.

newArr.push(1412200);
console.log(newArr);

//4. push()- This property is used to remove an element at the end of the array.

newArr.pop(1412200);
console.log(newArr);

//5. unshift()- This property is used to add an element at the beggening of the array.

newArr.unshift(1412200);
console.log(newArr);

//6. shift()- This property is used to remove an element at the beggening of the array.

newArr.shift(1412200);
console.log(newArr);

//7. length- This property returns the length of the array.

console.log(arr.length);

//8. toString() - This method returns a string representing the array and its elements.

console.log(arr.toString());

//9. from() - This method creates a new array from an array like object or an iterable object.Length will decide the length of the array.

const obj = {
  0: "Rajini",
  1: "Kamal",
  2: "Vijay",
  3: "Ajith",
  4: "Surya",
  5: "Vikram",
  length: 6,
};
const fromArr = Array.from(obj);
console.log(fromArr);

//10. join() - This method joins all elements of an array into a string using a specified seperator.

const joinArr = fromArr.join(", ");
console.log(joinArr);

//11. reverse() - This method is used to reverse the order of the elements in the array.

const revArr = fromArr.reverse();
console.log(revArr);

//12. sort() - This method is used to sorts the elements in an array in place and returns the sorted array.

const sortArr = revArr.sort();
console.log(revArr);

//13. copyWithin() - This method is used to shallow copies part of an array to another location in the same array and returns modified array without modifying its length.Syntax.copyWithin(target,start,end)=>these 3 parameters are array index.

const copyWithinArr = [1, 2, 3, 4, 5, 6];
copyWithinArr.copyWithin(5, 0, 4);
console.log(copyWithinArr);

//14. forEach() - This method is used to executes a provided function for each array element. It doesn't return anything, it just executes the callback function on each element of the array.

sortArr.forEach(function (actor) {
  console.log(actor);
});

//15. keys() - This method returns an array containing the keys of the given object.
const keyarr = Object.keys(obj);
console.log(keyarr);

//16. map() - This method creates a new array with the results of  calling a provided function on every element in the calling array.

const mapNumbers = copyWithinArr.map((number) => {
  console.log(number * 14);
  if (number % 2 == 0) {
    return number + 14;
  } else {
    return number;
  }
});
console.log(mapNumbers);

//17. concat() - This method is used to merge two or more arrays.this method doest not chenge the existing arrays, but instead returns a new array.

let concatArr = sortArr.concat(arr, mapNumbers);
console.log(concatArr);
//18. splice() - This method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.Syntax.splice(start,delete count, values1.....valuesn). I f we provide only the start and delete count it will remove the elements from an array.
sortArr.splice(2, 2);
console.log(sortArr);
revArr.splice(2, 1, "SK", "VJS");
console.log(revArr);

//19.flat() - This method creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.

const numFlat = [1, [2, [3, "v"]], [5]];
let flatnum = numFlat.flat(Infinity);
console.log(flatnum);

//20.filter() - This method creates an array with all elements that passes a test(provided as a function).

console.log(sortArr.filter((test) => test.includes("Ajith")));

//21.includes() - This method determines whether an array contains a specified element.
console.log(flatnum.includes("v"));

//22.reduce() - This method applies a function against aaccumulator and each element in the array to reduce it to a single value. It takes a callback function with an accumulator and current value as arguments and returns a single value.

const num = [1, 2, 3, 4, 5, 6];
const sum = num.reduce((acc, cv) => acc + cv, 0);
console.log(sum);

//23.indexOf() - This method is used to find the index of the elements in an array.

console.log(sortArr.indexOf("Kamal"));

//24.slice() - This method is used to returns a shallow copy of a portion of an array into a new array selected from start to end (end not included).

console.log(sortArr.slice(1, 4));

//25.find() - This method is used to returns the value of the first element in the array that satisfies the provided testing function.
console.log(sortArr.find((test) => test === "Ajith"));
console.log(num.find((test) => test % 2 == 0));

//26.findIndex() - This method is used to returns the index of the first element in the array that satisfies the provided testing function, or -1 if no such element is found.
console.log(sortArr.findIndex((test) => test === "SK"));
console.log(num.findIndex((test) => test % 2 == 0));

//27.every() - This method is used to tests whether all elements in the array pass the test implemented by the provided function. Returns true if all elements pass, otherwise false.

console.log(num.every((test) => test % 2 == 0));
const evenNum = [2, 4, 6, 8, 10];
console.log(evenNum.every((test) => test % 2 == 0));

//28.some() - This method is used to tests whether at least one element in the array passes the test implemented by the provided function. Returns true if at least one element passes, otherwise false.

console.log(num.some((test) => test % 2 == 0));
console.log(evenNum.some((test) => test % 2 == 0));

//29.fill() - This method is used to fills all the elements of an array from a start index to an end index with a static value.

console.log(evenNum.fill(5, 0, 4));

//30.reduceRight() - Applies a function against an accumulator and each value of the array (from right-to-left) to reduce it to a single value.

console.log(evenNum.reduceRight((acc, cur) => acc + cur));

//31.toLocaleString() - This method is used to returns a string representing the elements of the array, with elements converted to strings using their toLocaleString methods.

let dateArray = [new Date(Date.UTC(2020, 11, 20, 3, 0, 0))];

console.log(dateArray.toLocaleString("be-NL"));

//32.entries() - This method is used to returns a new Array Iterator object that contains the key/value pairs for each index in the array.

let iterator = sortArr.entries();
console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().value);

//33.findLast() - This method is used to returns the value of the last element in the array that satisfies the provided testing function.
console.log(sortArr.findLast((test) => test === "Ajith"));
console.log(num.findLast((test) => test % 2 == 0));

//34.isArray() - Determines whether the passed value is an array.
let myName = "vishnu";
console.log(Array.isArray(myName));
console.log(Array.isArray(sortArr));

//35.lastIndexOf() - This method is used to returns the last index at which a given element can be found in the array, or -1 if it is not present. The array is searched backward.

const movies = [
  "The Goat",
  "Kanguva",
  "Vettaiyan",
  "Amaran",
  "Vidamuyarchi",
  "Amaran",
];
console.log(movies.lastIndexOf("Amaran"));

//36.of() - This method is used to create a new array instance from a variable number of arguments, regardless of the number or types of those arguments. It provides a way to create arrays in a more predictable and consistent manner, especially compared to the Array constructor, which can behave differently based on the number of arguments passed.

const ofArr = Array.of(10, 20, 30, "vishnu", true);
console.log(ofArr);

//37.at() - This method is used to access elements from an array based on a given index. Unlike the traditional way of accessing elements using bracket notation (arr[index]), the at() method allows you to use both positive and negative integers as the index, which makes it particularly useful for accessing elements from the end of an array.

console.log(sortArr.at(3));
console.log(sortArr.at(0));
console.log(sortArr.at(-1));

//38.valueOf() - This method is used to returns the array itself. While this method exists on arrays, it is not often used explicitly because arrays in JavaScript usually behave as expected in most contexts without needing to call valueOf().

console.log(concatArr.valueOf());

//39.flatMap() - he flatMap() method in JavaScript is a powerful array method that combines the functionality of map() and flat() in a single operation. It first maps each element in an array using a mapping function, then flattens the result by one level, effectively creating a new array that is both transformed and flattened.

let flatMaparr = [1, 2, 3, 4];
let result = flatMaparr.flatMap((x) => [x, x * 2]);
console.log(result);

//40.delete - The delete operator is used to remove a property from an object, but it can also be used to delete an element from an array. However, using delete on an array has some specific behaviors that are important to undfferstand.

console.log(delete result[2]);
console.log(result);
