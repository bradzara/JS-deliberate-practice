// Start with an array of numbers and compute the sum of all the numbers.
// For example, [5, 10, 8, 3] becomes 26.

var numbers = [5, 10, 8, 3];
var sum = numbers.reduce(function (sum, number) {
  return sum + number;
},0);

console.log(sum);

// Start with an array of strings and combine them all into a single string.
// For example, ["volleyball", "basketball", "badminton"] becomes "volleyballbasketballbadminton".

var strings = ["volleyball", "basketball", "badminton"];
var combinedStrings = strings.reduce(function(combinedStrings, string) {
  return combinedStrings + string;
},"");
console.log(combinedStrings);

// Start with an array of hashes and compute the sum of the prices (from the :price key).
// For example, [{name: "chair", price: 100}, {name: "pencil", price: 1}, {name: "book", price: 4}] becomes 105.

var items = [
  {name: "chair", price: 100},
  {name: "pencil", price: 1},
  {name: "book", price: 4}
];
var sum = items.reduce(function(sum, item) {
  return sum + item.price;
}, 0);

console.log(sum);

// Start with an array of numbers and compute the the minimum number.
// For example, [5, 10, 8, 3, 9] becomes 3.

var numbers = [5, 10, 8, 3, 9];
var minimumNumber = numbers.reduce(function(min, number) {
  if (number < min) {
    return number;
  } else {
    return min;
  }
}, numbers[0]);

console.log(minimumNumber);

// Start with an array of strings and compute the total length of all the strings.
// For example, ["volleyball", "basketball", "badminton"] becomes 29.

var strings = ["volleyball", "basketball", "badminton"];
var addStringCharacters = strings.reduce(function(sum, string) {
  return sum + string.length;
}, 0);
console.log(addStringCharacters);