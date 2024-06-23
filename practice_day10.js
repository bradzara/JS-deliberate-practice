var firstName = "Bradley";
var lastName = "Zara";

console.log(firstName + " " + lastName);
console.log(`${firstName} ${lastName}`);

var numbers = [1, 2, 3];
var newNumbers = [];
var i = 0;
while (i < numbers.length) {
  newNumbers.push(numbers[i] * 3)
  i += 1
};

console.log(newNumbers);

var words = ["hello", "goodbye"];
var new_words = [];
var i = 0;
while (i < words.length) {
  new_words.push(words[i].toUpperCase());
  i += 1;
};
console.log(new_words);

var words = ["hello", "goodbye"];
var new_words = [];
var i = 0;
while (i < words.length) {
  new_words.push(words[i].length)
  i += 1;
};
console.log(new_words);


var people = [{name: "Alice", age: 27}, {name: "Blane", age: 16}];
var ages = [];
var i = 0;
while (i < people.length) {
  ages.push(people[i]["age"]);
  i += 1;
}
console.log(ages);