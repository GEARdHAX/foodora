// let choice = false; // true for vegetarian, false for non-vegetarian
// let api = fetch(
//  `https://api.spoonacular.com/recipes/complexSearch?apiKey=d6a195b32b3649efbf136b5465fb6889&query=chicken%20tikka&diet=${
//   choice ? "vegetarian" : "non-vegetarian"
//  }`
// );

// api
//  .then((response) => {
//   if (!response.ok) {
//    throw new Error(`HTTP error! status: ${response.status}`);
//   }
//   return response.json();
//  })
//  .then((result) => {
//   result.results.forEach((element) => {
//    console.log(element.title);
//    console.log(element.image);
//    console.log("\n");
//   });
//  })
//  .catch((error) => {
//   console.error("Error fetching data:", error);
//  });

// let id = 51035;
// let api = fetch(
//  `https://api.spoonacular.com/recipes/${id}/information?apiKey=d6a195b32b3649efbf136b5465fb6889`
// );
// api
//  .then((response) => {
//   return response.json();
//  })
//  .then((value) => {
//   console.log(value.title);
//   console.log(
//    "Is it Veg ? : ",
//    value.vegetarian,
//    "\n",
//    "Time to cook (min): ",
//    value.readyInMinutes,
//    "\n",
//    "Servings : ",
//    value.servings
//   );
//   value.extendedIngredients.forEach((element) => {
//    console.log(element.original);
//   });
//   console.log(value.summary);
//  })
//  .catch((err) => {
//   console.error("Error Finding Recipe", err);
//  });

let recipeList = [
 {id: 51035, title: "paneer"},
 {id: 51036, title: "chicken"},
 {id: 51037, title: "pasta"},
];

for (const recipe of recipeList) {
 console.log(recipe);
}
