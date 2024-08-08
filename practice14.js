// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.

function getCount(str) {
  vowels = ['a', 'e', 'i', 'o', 'u'];
  var count = 0;
  for (var i = 0; i < str.length; i++) {
    var letter = str[i];
    for (var x = 0; x < vowels.length; x++) {
      if (letter === vowels[x]) {
        count += 1;
      }
    }
  }
  return count;
}

console.log(getCount("this is a string with some more words"))