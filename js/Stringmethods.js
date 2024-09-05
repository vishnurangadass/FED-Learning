//String Methods

let myFullName = "Vishnu Rangadass";

//1. length - This property returns the length of the string.

console.log(myFullName.length);

//2. toLowerCase() - This method is used to convert the sting to lowercase.

console.log(myFullName.toLowerCase());

//3. toUpperCase() - This method is used to convert the sting to uppercase.

console.log(myFullName.toUpperCase());

//4.indexOf() - This method is used to find the index of the values in the string.

console.log(myFullName.indexOf("s"));

//5.substring() - This method is used to extracts a part of a string between two specified positions and return a new string.

let firstName = myFullName.substring(0, 6);
console.log(firstName);
let lastName = myFullName.substring(6, myFullName.length);
console.log(lastName);

//6.split() - This method is used to divides a string into an array of substrings based on a specified delimiter.

console.log(myFullName.split(""));
console.log(myFullName.split(" "));

//7.replace() - This method is used to replace value in the string.

console.log(myFullName.replace("Rangadass", "R"));

//8.replaceAll() - This method is used to replace all the value in the string.

console.log(myFullName.replaceAll("a", "e"));

//9.trim() - This method is used to remove the whitesapces from the beggining and end of a string.

let movie = "    The Greatest of all time          ";
console.log(movie.trim());

//10.trimStart() - This method is used to remove the whitesapces from the beggining  of a string.

console.log(movie.trimStart());

//11.trimEnd() - This method is used to remove the whitesapces from the end  of a string.

console.log(movie.trimEnd());

//12.charAt() - This method is used to find the character in the string with the use of index.

console.log(movie.charAt(8));

//13.concat() - This method is used to join two strings.

console.log(myFullName.concat(movie));

//14.startsWith() - This method is used to determine if a string begins with a specified substring. It returns true if the string starts with the specified characters, and false otherwise.

console.log(myFullName.startsWith("world", 7));
console.log(myFullName.startsWith("Rangadass"));
console.log(myFullName.startsWith("Rangadass", 7));

//15.endsWith() - This method is used to determine if a string ends with a specified substring. It returns true if the string ends with the specified characters, and false otherwise.

console.log(myFullName.endsWith("Vishnu"));
console.log(myFullName.endsWith("Vishnu", 6));
console.log(myFullName.endsWith("Rangadass"));
console.log(myFullName.endsWith("Rangadass", 16));

//16.includes() - This method determines whether a string contains a specified value.
console.log(myFullName.includes("s"));

//17.lastIndexOf() - This method is used to returns the last index at which a given value can be found in the string, or -1 if it is not present. The string is searched backward.

console.log(movie.lastIndexOf("a"));

//18.match() - This method is used to search for a match between a string and a regular expression. It returns an array of results when it finds a match or null if no match is found.
// If the regular expression includes the global (g) flag, it returns an array of all matches.
// If the global flag is not set, it returns an array with the first match and additional details (index, input, etc.).
// If no match is found, it returns null.

console.log(movie.match(/a/g));
console.log(movie.match(/a/));
console.log(movie.match(/v/g));

//19.matchAll() - This method is used to returns an iterator of all results matching a string against a regular expression, including capturing groups. It is useful when you need more detailed information about each match, such as capturing groups and the index of each match.

let matchStr = "once upon a time, there lived a ghost";
let matchesAll = matchStr.matchAll(/on/g);

for (let match of matchesAll) {
  console.log(match);
}

//20.at() - This method is used to access value from the string based on a given index.

console.log(myFullName.at(2));

//21.toLocaleUpperCase() - This method is used to convert a string to uppercase, while taking into account the locale-specific case mappings. These methods are useful for cases where different languages or regions have specific rules for converting letter cases.

let upperStr = myFullName.toLocaleUpperCase("tr"); // Turkish locale
console.log(upperStr);

//22.toLocaleLowerCase() - This method is used to convert a string to uppercase, while taking into account the locale-specific case mappings. These methods are useful for cases where different languages or regions have specific rules for converting letter cases.

let lowerStr = myFullName.toLocaleLowerCase("en-GB");
console.log(lowerStr);

//23. toString() - This method is used to convert a non-string varible to string.

let dob = 14122000;
console.log(dob.toString());

//24.repeat() - This method is used to repeat the string. Syntax.repeat(count);

console.log(myFullName.repeat(3));

//25.valueOf() - This method is used to return the value of the string.

console.log(myFullName.valueOf());

//26. padStart() - This method pads the beginning (left side) of the current string with a specified string until the resulting string reaches the given length.Syntax: string.padStart(targetLength, padString)

console.log(myFullName.padStart(19, "v"));

//27.padwith() - This method pads the end (left side) of the current string with a specified string until the resulting string reaches the given length.Syntax: string.padStart(targetLength, padString)

console.log(myFullName.padEnd(19, "s"));

//28.search() - This method is used to search for a match between a string and a regular expression. It returns the index of the first match or -1 if no match is found.

console.log(movie.search("test"));
console.log(movie.search("exam"));

//29.slice() - This method is used to extracts a section of a string (or an array) and returns it as a new string  without modifying the original.

console.log(movie.slice(8, 16));

//30. localCompare() - This method compares two strings in the current locale, taking into account locale-specific rules for alphabetical order.

let str1 = "apple";
let str2 = "banana";
console.log(str1.localeCompare(str2));
let str3 = "réservé";
let str4 = "reserve";
console.log(str3.localeCompare(str4, "fr", { sensitivity: "base" }));

//31. charCodeAt()- This method returns the Unicode code point of the character at a specified index in a string.
console.log(myFullName.charCodeAt(0));

//32. fromCharCode() - This method is used to convert one or more Unicode code points into a string. It is a static method of the String object, not an instance method.

let myName = String.fromCharCode(86, 105, 115, 104, 110, 117);
console.log(myName);

//33. codePointAt() - This method is used to returns a non-negative integer that is the Unicode code point value of the character at a given position in a string. This method is useful for handling characters outside the Basic Multilingual Plane (BMP), which can be represented with surrogate pairs.

console.log(myName.codePointAt(0));

let emoji = "😊";
console.log(emoji.codePointAt(0));
