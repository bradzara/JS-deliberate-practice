// Write a while loop to print the numbers 1 through 10.

var number = 1;

while (number <= 10) {
  console.log(number);
  number++;
}

// Write a while loop that prints the word "hello" 5 times.

var i = 0;
while (i < 5) {
  console.log("hello");
  i++;
}

// Write a while loop that asks the user to enter a word and will run forever until the user enters the word "stop".

// while (true) {
//   var input = window.prompt("Enter a word: ");
//   if (input === "stop") {
//     break;
//   }
// }

// Write a while loop that prints the numbers 0 through 100, increasing by 5 each time.

var number = 0;
while (number <= 100) {
  console.log(number);
  number = number + 5;
}

// Write a while loop that prints the number 9000 ten times.


var i = 0;
while (i < 10) {
  console.log(9000);
  i++;
}


// Write a while loop that prints the numbers 50 to 70.

var number = 50;
while (number <= 70) {
  console.log(number);
  number += 1;
}

// Write a while loop that prints the phrase "Around the world" 144 times.

var i = 0;
while (i < 144) {
  console.log("Around the world");
  i++;
}

// Write a while loop that asks the user to enter a word and will run forever until the user enters a word with more than 5 letters.

// Write a while loop that prints the even numbers from 2 to 40.

var number = 2;
while (number <= 40) {
  console.log(number);
  number = number + 2;
}

// Create an array to store 3 words. Then add two more words to the array and print the array on one line

var words = ["these", "are", "words"];
words.push("more", "stuff");
console.log(words);

// Create an array to store 4 letters. Then change the second letter to a number and print the array on one line.

var letters = ["a", "b", "c", "d"];
letters[1] = 1;
console.log(letters);

// Create an array to store 5 numbers. Then print out each number on separate lines with a while loop.

var numbers = [1, 2, 3, 4, 5];
var i = 0;
while (i < numbers.length) {
  console.log(numbers[i]);
  i++;
}

// Create an array to store 1 number. Then add three more numbers to the array and print the array on one line.

var numbers = [1];
numbers.push (2, 3, 4);
console.log(numbers);

// Create an array to store 3 strings with lower case letters. Then change the third string to have all capital letters and print the array on one line.

var strings = ["lower", "case", "letters"];
strings[2] = strings[2].toUpperCase();
console.log(strings);

// Create an array to store 3 names. Then print out each name on separate lines with a while loop.

var names = ["brad", "brian", "peter"];
var i = 0;
while (i < names.length) {
  console.log(names[i]);
  i++;
}

// Create an array to store 2 strings. Then add one string to the array and print the array on one line.

var strings = ["cat", "dog"];
strings.push("mouse");
console.log(strings);

// Create an array to store 5 numbers. Then change the first number to 10 times its original value and print the array on one line.

var numbers = [1 ,2 ,3, 4, 5];
numbers[0] = numbers[0] * 10;
console.log(numbers);

// Create an array to store 2 numbers. Then print out each number on separate lines with a while loop.

var numbers = [1, 2];
var i =0;
while (i < numbers.length) {
  console.log(numbers[i]);
  i++;
}

// Create an array to store names of 3 different countries. Then add one more country and print the array one line.

var countries = ["America", "Italy", "Mexico"];
countries.push("France");
console.log(countries);