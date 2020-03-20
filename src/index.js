/*
/////// DEMO OF MAP, FILTER, REDUCE, FIND //////////

var numbers = [3, 56, 2, 48, 5];

//Map -Create a new array by doing something with each item in an array.

console.log(
  numbers.map(function(x) {
    return x * 2;
  })
);

//Filter - Create a new array by keeping the items that return true.

console.log(
  numbers.filter(function(num) {
    return num < 10;
  })
);

//Reduce - Accumulate a value by doing something to each item in an array.

console.log(
  numbers.reduce(function(accumulator, currentNumber) {
    return accumulator + currentNumber;
  })
);

//Find - find the first item that matches from an array.

console.log(
  numbers.find(function(num) {
    return num > 10;
  })
);

//FindIndex - find the index of the first item that matches.
console.log(
  numbers.findIndex(function(num) {
    return num > 10;
  })
);

*/

import emojipedia from "./emojipedia";

console.log(
  emojipedia.map(function(x) {
    return x.meaning.substring(0, 100);
  })
);
