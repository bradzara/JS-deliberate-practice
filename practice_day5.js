// Write a program that uses variables to store a first and last name, then prints the full name in one line using string concatenation (the + operator).

var firstName = "John";
var lastName = "Smith"
console.log("my name is " + firstName + " " + lastName);

// Start with an array of strings and create a new array with each string's first letter only.
// For example, ["hello", "goodbye"] becomes ["h", "g"].

var strings = ["hello", "goodbye"];
var newStrings = [];
var index = 0;
while (index < strings.length) {
  newStrings.push(strings[index][0]);
  index ++;
}
console.log(newStrings);

// Start with an array of numbers and create a new array with each number divided by 2.
// For example, [1, 2, 3] becomes [0.5, 1.0, 1.5].

var numbers = [1, 2, 3];
var newNumbers = [];
var index = 0;
while (index < numbers.length) {
  newNumbers.push(numbers[index] / 2);
  index ++;
}
console.log(newNumbers);

// Start with an array of numbers and create a new array with each number plus 7.
// For example, [1, 2, 3] becomes [8, 9, 10].

var numbers = [1, 2, 3];
var newNumbers = [];
var index = 0;
while (index < numbers.length) {
  newNumbers.push(numbers[index] + 7);
  index ++;
}
console.log(newNumbers);