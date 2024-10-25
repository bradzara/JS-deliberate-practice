// Start with an array of numbers and create a new array with each number times 3.
// For example, [1, 2, 3] becomes [3, 6, 9].

var numbers = [1, 2, 3];
var newNumbers = numbers.map(function (number) {
  return number *  3;
});
console.log(newNumbers);

// Start with an array of strings and create a new array with each string upcased.
// For example, ["hello", "goodbye"] becomes ["HELLO", "GOODBYE"].

var strings = ["hello", "goodbye"]
var upcaseStrings = strings.map(function (string) {
  return string.toUpperCase();
});
console.log(upcaseStrings);

// Start with an array of hashes and create a new array of string values from each hash's :name key.
// For example, [{name: "Alice", age: 27}, {name: "Blane", age: 16}] becomes ["Alice", "Blane"].

var people = [{name: "Alice", age: 27}, {name: "Blane", age: 16}];
var names = people.map(function (name) {
  return name["name"];
});
console.log(names);

// Start with an array of numbers and create a new array with each number plus 7.
// For example, [1, 2, 3] becomes [8, 9, 10].

var numbers = [1, 2, 3];
