// # Make a hash to store a person's first name, last name, and email address. Then print each attribute on separate lines.

var person = {firstName: "Bradley", lastName: "Zara", email: "bradzara93@gmail.com"};
console.log(person.firstName);
console.log(person.lastName);
console.log(person.email);

// Make an array of hashes to store the first name and last name for 3 different people. Then print out the first person's info.

var people = [
  {firstName: "Mike", lastName: "Smith"},
  {firstName: "Joe", lastName: "Burns"},
  {firstName: "Casey", lastName: "Taylor"}
];
console.log(people[0].firstName, people[0].lastName);

// Make a hash to store prices for 3 different menu items. Then add a new menu item and price and print the hash to see the result.

var items = {sandwich: 10, salad: 8, soup: 6};
items["cookie"] = 3;
console.log(items);

// Make a hash to store a book's title, author, number of pages, and language. Then print each attribute on separate lines.

var books = {title: "Green Eggs and Ham", author: "Dr. Seuss", numberOfPages: 24, language: "English"};
console.log(books.title);
console.log(books.author);
console.log(books.numberOfPages);
console.log(books.language);

// Write a method that takes in a number and returns the number times two. Then run the method and print the result.

function getDouble(number) {
  return number * 2;
}
console.log(getDouble(9));

// Write a method that takes in a string and returns the string with all capital letters. Then run the method and print the result.

function capitalize(string) {
  return string.toUpperCase();
}
console.log(capitalize("word"));

// Write a method that takes in two numbers and returns the first number subtracted by the second. Then run the method and print the result.

function subtract(num1, num2) {
  return num1 - num2;
}
console.log(subtract(10, 7));

// Write a method that takes in a number and returns the number times itself. Then run the method and print the result.

function timesItself(number) {
  return number * number;
}
console.log(timesItself(9));

// Write a method that takes in a string and returns the first letter of the string. Then run the method and print the result.

function firstLetter(string) {
  return string[0];
}
console.log(firstLetter("ham"));

// Write a Song class with attributes for name, artist, and duration.

class Song {
  constructor(name, artist, duration) {
    this.name = name;
    this.artist = artist;
    this.duration = duration;
  }
}

var song = new Song("Love Yourz", "J.Cole", "4:38");
console.log(song);

// Write a Rectangle class with attributes for width and height.

class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
}

var rectangle = new Rectangle(8, 18);
console.log(rectangle);