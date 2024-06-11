// Start with an array of strings and create a new array with only the strings that start with the letter "w".
// For example, ["winner", "winner", "chicken", "dinner"] becomes ["winner", "winner"].

var strings = ["winner", "winner", "chicken", "dinner"];
var newStrings = [];
strings.forEach(function(string) {
  if (string[0] === "w") {
    newStrings.push(string);
  }
});
console.log(newStrings);

// Start with an array of numbers and create a new array with only the odd numbers.
// For example, [2, 4, 5, 1, 8, 9, 7] becomes [5, 1, 9, 7].

var numbers = [2, 4, 5, 1, 8, 9, 7];
var oddNumbers = [];
numbers.forEach(function(number) {
  if (number % 2 == 1) {
    oddNumbers.push(number);
  }
});
console.log(oddNumbers);

// Start with an array of strings and combine them all into a single string.
// For example, ["volleyball", "basketball", "badminton"] becomes "volleyballbasketballbadminton".

var strings = ["volleyball", "basketball", "badminton"];
var stringCombo = strings[0];
strings.forEach(function(string) {
  if (string != stringCombo) {
    stringCombo += string;
  }
});
console.log(stringCombo);