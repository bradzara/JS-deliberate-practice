// Write a Song class with attributes and reader/writer methods for name, artist, and duration. Then write a method that prints the name, artist, and duration in a single sentence.

class Song {
  constructor(name, artist, duration) {
    this.name = name;
    this.artist = artist;
    this.duration = duration;
  }

  printInfo() {
    console.log(`The song ${this.name} by ${this.artist} is ${this.duration} long.`);
  }
}

var song = new Song("dksjijf", "asdfas", "3.21");
console.log(song);
song.printInfo();

// Write a Rectangle class with attributes and reader/writer methods for width and height. Then write a method that returns the area of the rectangle.

class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  area() {
    return this.width * this.height;
  };
}

var rec = new Rectangle(13, 24);
console.log(rec.area());

// Write a Person class with attributes and reader/writer methods for name and age. Then write a method that returns the person's name in all capital letters.

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  caps() {
    return this.name.toUpperCase();
  };
}

var person = new Person("Mary Lou", 43);
console.log(person.caps());

// Write a Car class with attributes and reader/writer methods for make, model, year, and color. Then write a method that returns the make and model as a single sentence in all lowercase letters.

class Car {
  constructor(make, model, year, color) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.color = color;
  };

  lowercase() {
    return `${this.make} ${this.model}`.toLowerCase();
  };
}

var car = new Car("Subaru", "Wrx", 2013, "blue");
console.log(car.lowercase());

// Write a Plant class with attributes and reader/writer methods for name, size, and price. Then write a method that prints out the attributes in a single sentence.

class Plant {
  constructor(name, size, price) {
    this.name = name;
    this.size = size;
    this.price = price;
  }

  printInfo() {
    console.log(`the ${this.name} plant is ${this.price} dollars and is ${this.size} in size.`);
  };
}

var plant = new Plant("Fern", "medium", 45);
plant.printInfo();

// Write a program that stores a customer's age and a movie's time in two separate variables. Then calculate the price of a movie ticket based on the following conditions:

// If the age is 12 years old or younger, the ticket price is $5.
// If the age is between 13 and 59 years old and the movie is before 6 PM, the ticket price is $7. After 6 PM, the ticket price is $10.
// If the customer is 60 years old or older, the ticket price is $7.

var age = 34;
var time = 19;
var ticketPrice;

if (age <= 12) {
  ticketPrice = 5;
} else if (age >= 60) {
  ticketPrice = 7;
} else if (age > 12 && age < 60) {
  if (time < 18) {
    ticketPrice = 7;
  } else {
    ticketPrice = 10;
  };
}

console.log(ticketPrice);