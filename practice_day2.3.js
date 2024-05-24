// Write a program that uses variables to store a first and last name, then prints the full name in one line using string concatenation (the + operator).

var firstName = "Brad";
var lastName = "Zara";
console.log(firstName + ' ' + lastName);

// Write a program that uses variables to store three different colors, then prints out a sentence using the colors with string concatenation (the + operator).

var color1 = "red";
var color2 = "blue";
var color3 = "green";
console.log("The three colors I chose are " + color1 + ', ' + color2 + ' and ' + color3 + '.');

// Write a program that uses variables to store three different colors, then prints out a sentence using the colors with string interpolation (the #{} operator).

var color1 = "red";
var color2 = "blue";
var color3 = "green";
console.log(`My three favorite colors are ${color1}, ${color2}, and ${color3}.`);

// Start with an array of numbers and create a new array with each number times 3.
// For example, [1, 2, 3] becomes [3, 6, 9].

var numbers = [1, 2, 3];
var newNumbers = [];
numbers.forEach(function (number) {
  newNumbers.push(number * 3);
});
console.log(newNumbers);

// Start with an array of hashes and create a new array of string values from each hash's :name key.
// For example, [{name: "Alice", age: 27}, {name: "Blane", age: 16}] becomes ["Alice", "Blane"].

var people = [{name: "Alice", age: 27}, {name: "Blane", age: 16}]
var names = people.map(function (name) {
  return name.name;
});
console.log(names);

// Start with an array of numbers and create a new array with each number converted into a string.
// For example, [1, 2, 3] becomes ["1", "2", "3"].

var numbers = [1, 2, 3];
var stringNumbers = numbers.map(function (number) {
  return number.toString();
});
console.log(stringNumbers);

// Start with an array of strings and create a new array with only the strings that start with the letter "w".
// For example, ["winner", "winner", "chicken", "dinner"] becomes ["winner", "winner"].

var strings = ["winner", "winner", "chicken", "dinner"];
var wStrings = strings.filter(function (string) {
  return string[0] === "w";
});
console.log(wStrings);

// Start with an array of hashes and create a new array with only the hashes with prices greater than 5 (from the :price key).
// For example, [{name: "chair", price: 100}, {name: "pencil", price: 1}, {name: "book", price: 4}] becomes [{name: "chair", price: 100}].

var items = [
  {name: "chair", price: 100}, 
  {name: "pencil", price: 1}, 
  {name: "book", price: 4}
];
var expensiveItems = items.filter(function (item) {
  return item.price > 5;
});
console.log(expensiveItems);

// Start with an array of strings and create a new array with only the strings shorter than 4 letters.
// For example, ["a", "man", "a", "plan", "a", "canal", "panama"] becomes ["a", "man", "a", "a"].

var strings = ["a", "man", "a", "plan", "a", "canal", "panama"];
var shortStrings = strings.filter(function (string) {
  return string.length < 4;
});
console.log(shortStrings);

