function positiveSum(arr) {
  const positives = [];
  sum = 0;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      positives.push(arr[i]);
    }
  }

  for (var x = 0; x < positives.length; x++) {
    sum += positives[x];
  }
  
  return sum;
}

const numbers = [-1, 3, -8, 9, 10];
console.log(positiveSum(numbers));