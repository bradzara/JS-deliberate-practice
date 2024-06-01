// Start with an array of numbers and create a new array with each number times 3.
// For example, [1, 2, 3] becomes [3, 6, 9].

var numbers = [1, 2, 3];
var newNumbers = [];
var i = 0;
while (i < numbers.length) {
  newNumbers.push(numbers[i] * 3);
  i ++;
}
console.log(newNumbers);

// Start with an array of hashes and create a new array of string values from each hash's :name key.
// For example, [{name: "Alice", age: 27}, {name: "Blane", age: 16}] becomes ["Alice", "Blane"].

var people = [{name: "Alice", age: 27}, {name: "Blane", age: 16}];
var names = [];
people.forEach (function(person) {
  names.push(person.name);
});
console.log(names);

// Start with an array of strings and create a new array with each string's length.
// For example, ["hello", "goodbye"] becomes [5, 7].

var strings = ["hello", "goodbye"];
var stringLength = strings.map(function(string) {
  return string.length;
});
console.log(stringLength);

// Start with an array of numbers and create a new array with only the numbers less than 20.
// For example, [2, 32, 80, 18, 12, 3] becomes [2, 18, 12, 3].

var numbers = [2, 32, 80, 18, 12, 3];
var newNumbers = [];
var i = 0;
while (i < numbers.length) {
  if (numbers[i] < 20) {
    newNumbers.push(numbers[i]);
  }
  i ++;
}
console.log(newNumbers);

// Start with an array of hashes and create a new array with only the hashes with names shorter than 6 letters (from the :name key).
// For example, [{name: "chair", price: 100}, {name: "pencil", price: 1}, {name: "book", price: 4}] becomes [{name: "chair", price: 100}, {name: "book", price: 4}].

var items = [{name: "chair", price: 100}, {name: "pencil", price: 1}, {name: "book", price: 4}];
var newItems = [];
items.forEach(function(item) {
  if (item.name.length < 6) {
    newItems.push(item);
  }
  i ++;
});
console.log(newItems);

// Start with an array of strings and create a new array with only the strings that don't start with the letter "b".
// For example, ["big", "little", "good", "bad"] becomes ["little", "good"].

var strings = ["big", "little", "good", "bad"];
var newStrings = strings.filter(function(string) {
  if (string[0] != "b") { 
    return string;
  }
});
console.log(newStrings);

// Start with an array of numbers and create a new array with only the odd numbers.
// For example, [2, 4, 5, 1, 8, 9, 7] becomes [5, 1, 9, 7].

var numbers = [2, 4, 5, 1, 8, 9, 7];
var newNumbers = numbers.filter(function(number) {
  if (number % 2 === 1) {
    return number;
  }
});
console.log(newNumbers);

// Start with an array of strings and combine them all into a single string.
// For example, ["volleyball", "basketball", "badminton"] becomes "volleyballbasketballbadminton".

var strings = ["volleyball", "basketball", "badminton"];
var newString = "";
var i = 0;
while (i < strings.length) {
  string = strings[i];
  newString = newString + strings[i];
  i ++;
}
console.log(newString);

// Start with an array of numbers and compute the the minimum number.
// For example, [5, 10, 8, 3, 9] becomes 3.

var numbers = [5, 10, 8, 3, 9];
var newNumber = numbers[0];
numbers.forEach(function(number) {
  if (number < newNumber) {
    newNumber = number;
  }
});
console.log(newNumber);

// Start with an array of numbers and compute product of all the numbers.
// For example, [5, 10, 8, 3] becomes 1200.

var numbers = [5, 10, 8, 3];
var product = numbers.reduce(function(product, number) {
  return product * number;
}, 1);
console.log(product);