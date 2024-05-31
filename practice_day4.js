// Write a program that uses a variable to store two numbers, then prints the two numbers multiplied together.

var num1 = 9;
var num2 = 7;

console.log(num1 * num2);

// Use a variable to store a number, then write a condition that prints 5 if the number is greater than 80, prints 4 if the number is greater than 60, prints 3 if the number is greater than 40, prints 2 if the number is greater than 20, and prints 1 otherwise (only one print statement should occur).

var number = 6;
if (number > 80) {
  console.log(5);
} else if (number > 60) {
  console.log(4);
} else if (number > 40) {
  console.log(3);
} else if (number > 20) {
  console.log(2);
} else {
  console.log(1);
}

// Write a while loop that prints the number 9000 ten times.

var number = 9000;
var i = 0;
while (i < 10) {
  console.log(number);
  i ++;
}

// Create an array to store 3 strings with lower case letters. Then change the third string to have all capital letters and print the array on one line.

var strings = ["these", "are", "lowercase"];
strings[2] = strings[2].toUpperCase();
console.log(strings);

// Make an array of hashes to store the first name and last name for 3 different people. Then print out the first person's info.

var people = [
  {firstName: "Bill", lastName: "Murray"},
  {firstName: "Jim", lastName: "Carrey"},
  {firstName: "Tom", lastName: "Hanks"}
];
console.log(people[0]);

// Write a method that takes in 3 numbers and returns the average (the sum divided by 3.0). Then run the method and print the result.

function average(num1, num2, num3) {
  return (num1 + num2 + num3) / 3;
};

console.log(average(1,2,3));

// Write a method that takes in a number and returns the number as a string. Then run the method and print the result.

function stringify(number) {
  return number.toString()
}
console.log(stringify(9));

// Write a Person class with attributes for name and age.

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

var teacher = new Person("Tracey", 43);
console.log(teacher);

// Write a Plant class with attributes for name, size, and price.

class Plant {
  constructor(name, size, price) {
    this.name = name;
    this.size = size;
    this.price = price;
  }
}

var fern = new Plant("fern", "medium", 25);
console.log(fern);

// Write a program that uses variables to store a book's title and author, then prints out a sentence using that information with string concatenation (the + operator).

var title = "No Country For Old Men";
var author = "Cormac McCarthy";
console.log(title + " is written by " + author);

// Write a program that uses variables to store a book's title and author, then prints out a sentence using that information with string interpolation (the #{} operator).

var title = "No Country For Old Men";
var author = "Cormac McCarthy";
console.log(`${title} is written by ${author}`);

// Start with an array of strings and create a new array with each string upcased.
// For example, ["hello", "goodbye"] becomes ["HELLO", "GOODBYE"].

var strings = ["hello", "goodbye"];
var newStrings = strings.map(function(string) {
  return string.toLocaleUpperCase();
});

console.log(newStrings);

// Start with an array of hashes and create a new array of number values from each hash's :age key times 2.
// For example, [{name: "Alice", age: 27}, {name: "Blane", age: 16}] becomes [54, 32].

var people = [{name: "Alice", age: 27}, {name: "Blane", age: 16}];
var multipliedAges = people.map(function(person) {
  return person.age * 2;
});

console.log(multipliedAges);


// Start with an array of strings and create a new array with only the strings that start with the letter "w".
// For example, ["winner", "winner", "chicken", "dinner"] becomes ["winner", "winner"].

var strings = ["winner", "winner", "chicken", "dinner"];
var wWords = strings.filter(function(string) {
  return string[0] === "w";
});

console.log(wWords);