// Problem 1: Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted. The returned value should be a number.
// For example, getIndexToIns([1,2,3,4], 1.5) should return 1 because it is greater than 1 (index 0), but less than 2 (index 1).
// Likewise, getIndexToIns([20,3,5], 19) should return 2 because once the array has been sorted it will look like [3,5,20] and 19 is less than 20 (index 2) and greater than 5 (index 1).


function getIndexToIns(arr, num) {
  arr.push(num);
  arr.sort((a, b) => a - b);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === num) {
      return i
    }
  }
  return arr.indexOf(num);
}

console.log(getIndexToIns([40, 60, 30, 100, 75, 1], 50)) // => 3 



// Problem 2: Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case
// given


function titleCase(str) {
  let arr = str.split(" ")
  return arr.map(word => word[0].toUpperCase() + word.slice(1).toLowerCase()).join(" ");
}


console.log(titleCase("bEst LeSSon Of thE Year") )// => "Best Lesson Of The Year"