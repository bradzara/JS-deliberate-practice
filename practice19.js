function cakes(recipe, available) {
  const ingredients = Object.keys(recipe);
  let totalCount = [];
  
  for (var i = 0; i < Object.keys(available).length; i++) {
    for (var j = 0; j < ingredients.length; j++) {
      if (available[ingredients[i]] && recipe[ingredients[i]]) {
        totalCount.push(available[ingredients[i]] / recipe[ingredients[i]]);
      } else if (available[ingredients[i]] !== recipe[ingredients[i]]) {
        return 0;
      }
    }
  }

  let lowest = totalCount[0];
  for (k = 0; k < totalCount.length; k++) {
    if (totalCount[k] < lowest) {
      lowest = totalCount[k];
    }
  }
  return lowest.toFixed();
}

let recipe = {flour: 500, sugar: 200, eggs: 1};
let available = {flour: 1200, sugar: 1200, eggs: 5, milk: 200};

console.log(cakes(recipe, available));