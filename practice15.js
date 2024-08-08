// The Western Suburbs Croquet Club has two categories of membership, Senior and Open. They would like your help with an application form that will tell prospective members which category they will be placed.

// To be a senior, a member must be at least 55 years old and have a handicap greater than 7. In this croquet club, handicaps range from -2 to +26; the better the player the lower the handicap.

// Input
// Input will consist of a list of pairs. Each pair contains information for a single potential member. Information consists of an integer for the person's age and an integer for the person's handicap.

// Output
// Output will consist of a list of string values (in Haskell and C: Open or Senior) stating whether the respective member is to be placed in the senior or open category.

function openOrSenior(data) {
  membership = [];
  for (var i = 0; i < data.length; i++) {
    var person = data[i];
    var age = person[0];
    var handicap = person[1];
    console.log(age, handicap)
    if (age < 55) {
      membership.push("open");
    } else if (age >= 55 && handicap > 7) {
      membership.push("senior");
    } else {
      membership.push("open");
    }
  }
  return membership;
}

console.log(openOrSenior([[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]]))