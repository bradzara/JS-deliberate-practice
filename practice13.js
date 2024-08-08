// Complete the square sum function so that it squares each number passed into it and then sums the results together.

function squareSum(numbers) {
  var squaredNumbers = [];
  for (let i = 0; i < numbers.length; i++) {
    squaredNumbers.push(numbers[i] * numbers[i]);
  }

  var sum = 0;
  for (let i = 0; i < squaredNumbers.length; i++) {
    sum += squaredNumbers[i];
  }
  return sum;
}

console.log(squareSum([1, 2, 2]));