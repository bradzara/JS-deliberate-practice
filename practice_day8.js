// Write a program that uses variables to store a first and last name, then prints the full name in one line using string concatenation (the + operator).

var firstName = "Bradley";
var lastName = "Zara";
console.log(firstName + ' ' + lastName);

// Write a program that uses variables to store three different colors, then prints out a sentence using the colors with string interpolation (the #{} operator).

var color1 = "red";
var color2 = "blue";
var color3 = "green";
console.log(`${color1}, ${color2}, ${color3}`);

// Write a program that uses variables to store the names of three cities, then prints out a sentence using that information with string concatenation (the + operator).

var city1 = "Philadelphia";
var city2 = "Trenton";
var city3 = "Los Angeles";
console.log("The three cities i have lived in are: " + city1 + ", " + city2 + ", and " + city3 + ".")

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