import emojipedia from "./emojipedia";

var numbers = [3, 56, 2, 48, 5];

//******************************************* BEFORE ES6 */
//Map -LOOPS THROUGH AN ARRAY and creates a new array by doing something with each item in an array.

// Method #1 - Using map function
// function double(x) {
//   return x * 2;
// }

// const newNums = numbers.map(double);

// Method #2 - Using forEach function, a new array and a new function
// var newNums = [];

// function double(x) {
//   newNums.push(x * 2);
// }

// numbers.forEach(double);

// console.log(newNums);

// Method #3 - Using forEach function and passing in an annonymous function
// var newNums = [];

// numbers.forEach(function(x) {
//   newNums.push(x * 2);
// });

// console.log(newNums);

// Method #4 - Using the map function and passing in an annonymous function
// This method is more concise because this function itself returns an output which is a new array
// const newNums = numbers.map(function(x) {
//   return x * 2;
// });

// console.log(newNums);

//Filter - Create a new array by keeping the items that return true.

// Method #1 - using the filter function and passing an annonymous function that will return numbers greater than 10
// const numGreaterThan10 = numbers.filter(function(num) {
//   return num > 10;
// });

// console.log(numGreaterThan10);

// Method # 2 - Using the filter function with the forEach function
// var newNums = [];

// numbers.forEach(function(num) {
//   if (num > 10) {
//     newNums.push(num);
//   }
// });

// console.log(newNums);

//Reduce - Accumulate a value by doing something to each item in an array.

// Method #1 - Using a forEach function with an annonymous function
// var newNum = 0;

// numbers.forEach( function(num){
//   newNum += num;
// });

// console.log(newNum);

// Method #2 - Using the reduce function and an annonymous function. Using console.log to see how this function works.

// var newNum = numbers.reduce(function(accumulator, currentNumber) {
//   console.log("accumulator: " + accumulator);
//   console.log("currentNumber: " + currentNumber);
//   console.log("_________________________________");
//   return accumulator + currentNumber;
// });

// console.log(newNum);

// **************************************** Introduced with ES6

//Find - find the first item that matches from an array.
// var newNum = numbers.find(function(num){
//   return num > 10;
// });

// console.log(newNum);

//FindIndex - find the index of the first item that matches.
// var newNum = numbers.findIndex(function(num) {
//   return num > 10;
// });

// console.log(newNum);

const emojiMeanings = emojipedia.map(function(emojiEntry) {
  return emojiEntry.meaning.substr(0, 99);
});

console.log(emojiMeanings);
